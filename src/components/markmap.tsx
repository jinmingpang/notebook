/**
 * 优化操作选项
 */

import React, { useRef, useEffect, useState, useMemo } from 'react';
import cls from 'classnames';
import * as d3 from 'd3';
import { walkTree, flatMap, childSelector } from 'markmap-common';
import { Transformer } from 'markmap-lib';
import { Toolbar } from 'markmap-toolbar';
import * as markmap from 'markmap-view';
import debounce from 'lodash/debounce';
import isString from 'lodash/isString';
import lowerCase from 'lodash/lowerCase';
import isEmpty from 'lodash/isEmpty';

import 'markmap-toolbar/dist/style.css';
import style from './markmap.module.less';

const { Markmap, loadCSS, loadJS } = markmap;

function MarkMap(props: any) {
  const { md = '', height = '300px', bg = false, style: wrapStyle } = props;
  const $wrap = useRef<any>();
  const $svg = useRef<any>();
  const mm = useRef<any>({});

  const load = () => {
    const transformer = new Transformer();
    const { root, features } = transformer.transform(md);
    const { styles, scripts } = transformer.getUsedAssets(features);

    if (styles) {
      loadCSS(styles);
    }
    if (scripts) {
      loadJS(scripts, { getMarkmap: () => markmap });
    }

    mm.current = Markmap.create($svg.current, {}, root);
    addToolbar($wrap, mm.current);
    resolveMmData(mm.current);
    return () => {
      mm.current.destroy();
    };
  };

  useEffect(() => {
    return load();
  }, []);

  return (
    <div
      ref={$wrap}
      style={wrapStyle}
      className={cls(style.container, { [style.containerBg]: bg })}
    >
      <FilterInput mm={mm} />
      <svg ref={$svg} style={{ height }} />
    </div>
  );
}

const FilterInput = (props: any) => {
  const { mm } = props;
  const [text, setText] = useState('');
  const [filteredMap, setFilteredMap] = useState({});

  const doFilter = (filterText: string) => {
    const { state, flatData } = mm.current;

    const filteredMap = {};

    if (!filterText) {
      toolActions.allOpen(mm.current);
      return;
    }

    flatData.forEach((item) => {
      const { content, parents, key } = item;
      const index = lowerCase(content).indexOf(lowerCase(filterText));
      if (index > -1) {
        const len = filterText.length;
        const matchContent = `${content.slice(
          0,
          index,
        )}<span class="b bg-1">${content.slice(
          index,
          index + len,
        )}</span>${content.slice(index + len)}`;
        parents.forEach((key) => {
          if (!filteredMap[key]) {
            filteredMap[key] = true;
          }
        });
        filteredMap[key] = matchContent;
      }
    });

    if (isEmpty(filteredMap)) {
      setFilteredMap({});
      return;
    }

    walkTree(state.data, (item, next) => {
      const matchContent = filteredMap[item.state.key];
      item.payload.rawFold = item.payload.fold;

      let fold = 0;
      if (filterText) {
        fold = matchContent ? 0 : 1;
      } else {
        fold = item.payload.rawFold;
      }

      if (isString(matchContent)) {
        item.rawContent = item.content;
        item.content = matchContent;
      } else if (item.rawContent) {
        item.content = item.rawContent;
        item.rawContent = '';
      }

      item.payload = {
        ...item.payload,
        fold: item.depth == 0 ? 0 : fold,
      };

      next();
    });

    mm.current.setData();

    setFilteredMap(filteredMap);
  };

  const handleFilter = useMemo(() => {
    return debounce(doFilter, 500);
  }, []);

  const handleChange = (e) => {
    const { value = '' } = e.target;
    setText(value);
    handleFilter(value);
  };

  const handleClear = () => {
    setText('');
    handleFilter('');
  };

  return (
    <div className={style.filterWrap}>
      <input
        placeholder="搜索..."
        className={style.filterInput}
        value={text}
        onChange={handleChange}
      />
      <FilterStep filteredMap={filteredMap} mm={mm} />
      {!!text && (
        <>
          <img
            onClick={handleClear}
            className={style.filterInputClose}
            src="/notebook/images/icon-close.png"
          />
        </>
      )}
    </div>
  );
};

const FilterStep = (props: any) => {
  const { mm, filteredMap } = props;
  const [curr, setCurr] = useState(0);

  const allCount = Object.values(filteredMap).filter((i) => isString(i)).length;

  // 设置
  useEffect(() => {
    setCurr(0);
  }, [filteredMap]);

  useEffect(() => {
    //
  }, [curr]);

  const handleNav = (e) => {
    const { nav } = e.currentTarget.dataset;
    if (nav === 'left') {
      setCurr(curr - 1);
    } else {
      setCurr(curr + 1);
    }
  };

  return (
    <div className={style.filterStep}>
      <span className={style.filterStepNum}>
        {curr + 1}/{allCount}
      </span>
      <span className={style.filterStepNav}>
        <i data-nav="left" onClick={handleNav}>
          &lt;
        </i>
        <i data-nav="right" onClick={handleNav}>
          &gt;
        </i>
      </span>
    </div>
  );
};

const addToolbar = ($wrap, mm: any) => {
  const toolbar = new Toolbar();
  // console.log('==>mm', mm);
  toolbar.setBrand(false);
  toolbar.setItems([
    'allClose',
    'allOpen',
    'recurse',
    'zoomNormal',
    'fit',
    'zoomIn',
    'zoomOut',
  ]);
  toolbar.attach(mm);
  toolbar.register({
    id: 'zoomNormal',
    title: 'Zoom out',
    content: Toolbar.icon(
      'M182.032,167.936v1.571219h-4.141567v8.428781h-1.716867v-8.428781h-4.141567v-1.571219h10Z',
      { transform: 'translate(-167.032-162.936)' },
    ),
    onClick: () => {
      toolActions.zoomNormal(mm);
    },
  });
  toolbar.register({
    id: 'allClose',
    title: 'Close all',
    content: Toolbar.icon(
      'M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z',
      {
        transform:
          'matrix(1.001583-.000751 0.000738 0.983607-80.544423-246.735547)',
      },
    ),
    onClick: () => {
      toolActions.allClose(mm);
    },
  });
  toolbar.register({
    id: 'allOpen',
    title: 'Open all',
    content: Toolbar.icon(
      'M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z',
      {
        transform:
          'matrix(-1.001579-.00299-.002937 0.983603 101.118148-246.532487)',
      },
    ),
    onClick: () => {
      toolActions.allOpen(mm);
    },
  });
  const $toolbar: any = toolbar.render();
  $toolbar.classList.add(style.toolbar);
  $wrap.current.append($toolbar);
};

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

export default MarkMap;
