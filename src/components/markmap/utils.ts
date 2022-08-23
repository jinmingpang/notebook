import * as d3 from 'd3';
import lowerCase from 'lodash/lowerCase';
import { noop, walkTree } from 'markmap-common';

const getFlatData = (root) => {
  const flatData = [];

  const travel = (data, parents = []) => {
    const id = data.state.id || '';
    if (data.children) {
      data.children.forEach((item) => {
        travel(item, [...parents, id]);
      });
      return;
    }

    flatData.push({
      parents,
      content: data.content || '',
      id,
    });
  };

  travel(root);

  return flatData;
};

const toolActions = {
  zoomNormal: (mm) => {
    const svgNode = mm.svg.node();
    const { width: offsetWidth, height: offsetHeight } =
      svgNode.getBoundingClientRect();
    const { minX, maxX, minY, maxY } = mm.state;
    const naturalWidth = maxY - minY;
    const naturalHeight = maxX - minX;
    const scale = 1.2;
    const initialZoom = d3.zoomIdentity
      .translate(
        (offsetWidth - naturalWidth * scale) / 2 - minY * scale,
        (offsetHeight - naturalHeight * scale) / 2 - minX * scale,
      )
      .scale(scale);
    return mm
      .transition(mm.svg)
      .call(mm.zoom.transform, initialZoom)
      .end()
      .catch(noop);
  },
  allClose: (mm) => {
    mm.setData(undefined, {
      autoFit: true,
      initialExpandLevel: 1,
    });
  },
  allOpen: (mm) => {
    let isDirty = false;
    walkTree(mm.state.data, (item, next) => {
      if (item.rawContent) {
        isDirty = true;
        item.content = item.rawContent;
        item.rawContent = '';
      }
      item.payload = {
        ...item.payload,
        fold: 0,
      };
      next();
    });
    if (isDirty) {
      mm.setData();
    } else {
      mm.renderData();
    }
  },
  centerNode: (mm, x0, y0) => {
    const svgNode = mm.svg.node();
    const { width: offsetWidth, height: offsetHeight } =
      svgNode.getBoundingClientRect();
    const scale = 1.2;
    let x = -x0 * scale + offsetWidth / 2;
    let y = -y0 * scale + offsetHeight / 2;

    const initialZoom = d3.zoomIdentity.translate(x, y).scale(scale);
    mm.svg
      .transition()
      .duration(300)
      .call(mm.zoom.transform, initialZoom)
      .end()
      .catch(noop);
  },
};

const getFilterMap = (filterText, flatData) => {
  const filteredMap = {};
  const uglyTpl = '<]_!->';
  flatData.forEach((item) => {
    const { content, parents, id } = item;
    const blankStr = content.replace(/<[^>]*>?/gm, uglyTpl);

    const index = lowerCase(blankStr).indexOf(lowerCase(filterText));

    if (index > -1) {
      const reg = new RegExp(`(\>[^\>\<]*)(${filterText})([^\>\<]*\<)`, 'im');
      const replaceTpl = `$1<span id="mm-match-${id}" class="mm-match-text b bg-1">$2</span>$3`;
      let matchContent = `${uglyTpl}${content}${uglyTpl}`
        .replace(reg, replaceTpl)
        .replaceAll(uglyTpl, '');
      parents.forEach((parentId) => {
        if (!filteredMap[parentId]) {
          filteredMap[parentId] = true;
        }
      });
      filteredMap[id] = matchContent;
    }
  });
  return filteredMap;
};

// window.toolActions = toolActions;
// console.log('===>',d3)

export default {
  getFlatData,
  getFilterMap,
  toolActions,
};
