/**
 * 优化操作选项
 */

import React, { useRef, useEffect } from 'react';
import cls from 'classnames';
import { Transformer } from 'markmap-lib';
import * as markmap from 'markmap-view';

import style from './index.module.less';
import toolbar from './toolbar';
import utils from './utils';
import FilterInput from './filter-input';

const { Markmap, loadCSS, loadJS } = markmap;

function MarkMap(props: any) {
  const {
    md = '',
    readOnly = false,
    height = '300px',
    bg = false,
    onResolveData,
    initialLevel = -1,
    onInit,
    css = '',
  } = props;

  const $wrap = useRef<any>();
  const $svg = useRef<any>();
  const mm = useRef<any>({});

  const svgStyle = {
    height,
  };

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

    if (onResolveData) {
      onResolveData(root);
    }

    // console.log('==>root', root);
    mm.current = Markmap.create(
      $svg.current,
      {
        initialExpandLevel: initialLevel,
      },
      root,
    );

    mm.current.flatData = utils.getFlatData(root);

    if (!readOnly) {
      toolbar.addToolbar($wrap, mm.current);
    }

    if (onInit) {
      onInit(mm.current);
    }
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
      className={cls(style.container, {
        [style.containerBg]: bg,
        [style.readOnly]: readOnly,
      })}
    >
      {css && <style>{css}</style>}
      {!readOnly && <FilterInput mm={mm} />}
      <svg ref={$svg} style={svgStyle} />
    </div>
  );
}

export default MarkMap;
