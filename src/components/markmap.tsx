import React, { useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Toolbar } from 'markmap-toolbar';
import * as markmap from 'markmap-view';
import { useEffect } from 'react';

import "markmap-toolbar/dist/style.css";
import style from './markmap.module.less'

const { Markmap, loadCSS, loadJS } = markmap;


function MarkMap(props: any) {
  const { md = '' } = props
  const $wrap = useRef<any>()
  const $svg = useRef<any>()

  const addToolbar = (mm: any) => {
    const toolbar: any = Toolbar.create(mm);
    toolbar.classList.add(style.toolbar)
    $wrap.current.append(toolbar);
  }
  
  const load = () => {
    const transformer = new Transformer();
    const { root, features } = transformer.transform(md);
    const { styles, scripts } = transformer.getUsedAssets(features);

    if (styles) {
      loadCSS(styles)
    };
    if (scripts) {
      loadJS(scripts, { getMarkmap: () => markmap })
    };

    const mm = Markmap.create($svg.current, {}, root);
    addToolbar(mm)
  }
  useEffect(() => {
    load()
  }, [])
  
  return (
    <div ref={$wrap} className={style.container}>
      <svg ref={$svg} />
    </div>
  )
}

export default MarkMap