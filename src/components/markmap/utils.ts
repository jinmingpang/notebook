import * as d3 from 'd3';
import { walkTree } from 'markmap-common';

const resolveMmData = (mm: any) => {
  const { data } = mm.state;
  const flatData = [];

  const travel = (data, parents = []) => {
    const key = data.state.key || '';
    if (data.children) {
      data.children.forEach((item) => {
        travel(item, [...parents, key]);
      });
      return;
    }

    flatData.push({
      parents,
      content: data.content || '',
      key: data.state.key || '',
    });
  };

  travel(data);

  mm.flatData = flatData;
};

const toolActions = {
  zoomNormal: (mm) => {
    const svgNode = mm.svg.node();
    const { width: offsetWidth, height: offsetHeight } =
      svgNode.getBoundingClientRect();
    const { minX, maxX, minY, maxY } = mm.state;
    const naturalWidth = maxY - minY;
    const naturalHeight = maxX - minX;
    const scale = 1.25;
    const initialZoom = d3.zoomIdentity
      .translate(
        (offsetWidth - naturalWidth * scale) / 2 - minY * scale,
        (offsetHeight - naturalHeight * scale) / 2 - minX * scale,
      )
      .scale(scale);
    return mm.transition(mm.svg).call(mm.zoom.transform, initialZoom).end();
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
};

export default {
  resolveMmData,
  toolActions,
};
