import React, { useEffect, useState } from 'react';
import isString from 'lodash/isString';

import style from './markmap.module.less';

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

export default FilterStep;
