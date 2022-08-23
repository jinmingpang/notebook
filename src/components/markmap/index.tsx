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
    toolbar.addToolbar($wrap, mm.current);
    utils.resolveMmData(mm.current);
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

export default MarkMap;
