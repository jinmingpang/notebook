import React, { useEffect, useState } from 'react';
import isString from 'lodash/isString';

import style from './index.module.less';

const FilterAction = (props: any) => {
  const { mm, filteredMap, onClear } = props;
  const [curr, setCurr] = useState(0);

  const allCount = Object.values(filteredMap).filter((i) => isString(i)).length;
  const hasCount = allCount > 0;
  const hasMoreCount = allCount > 1;
  // 设置
  useEffect(() => {
    setCurr(hasCount ? 1 : 0);
    window.localStorage;
  }, [filteredMap]);

  useEffect(() => {
    if (hasCount && mm.current) {
      let isMatch = false;
      // console.log('--->aa', mm.current.g.selectAll('foreignObject'));
      mm.current.g.selectAll('foreignObject').filter((d) => {
        const { key = '', x0, y0 } = d.data.state;
        const target = isString(filteredMap[key]);
        if (!isMatch && target) {
          isMatch = true;
          console.log('node==>', d, x0, y0);
          return true;
        }
        return false;
      });
    }
  }, [curr]);

  const handleNav = (e) => {
    const { key } = e.currentTarget.dataset;
    if (!hasMoreCount) {
      return;
    }
    if (key === 'left') {
      setCurr(curr - 1);
    } else {
      setCurr(curr + 1);
    }
  };

  return (
    <div className={style.filterStep}>
      <span className={style.filterStepNum}>
        {curr}/{allCount}
      </span>
      <span className={style.filterStepNav}>
        <button disabled={!hasMoreCount}>
          <i data-key="left" onClick={handleNav}>
            &lt;
          </i>
          <i data-key="right" onClick={handleNav}>
            &gt;
          </i>
        </button>
        <i data-key="close" onClick={onClear}>
          x
        </i>
      </span>
    </div>
  );
};

export default FilterAction;
