import React, { useEffect, useMemo, useState } from 'react';
import isString from 'lodash/isString';
import map from 'lodash/map';
import debounce from 'lodash/debounce';

import hooks from '../../hooks';

import style from './index.module.less';
import utils from './utils';

const FilterAction = (props: any) => {
  const { mm, filteredMap, onClear } = props;
  const [curr, setCurr] = useState(0);
  const timeoutRef = hooks.useTimeoutRef();

  const matchData = useMemo(() => {
    const matchItems = [];
    map(filteredMap, (value, id) => {
      if (isString(value)) {
        matchItems.push(id);
      }
    });
    const allCount = matchItems.length;
    const hasCount = allCount > 0;
    const hasMoreCount = allCount > 1;

    return {
      matchItems,
      allCount,
      hasCount,
      hasMoreCount,
    };
  }, [filteredMap]);

  const { allCount, hasCount, hasMoreCount, matchItems } = matchData;

  // 设置
  useEffect(() => {
    if (!hasCount) {
      setCurr(0);
      return;
    }
    setCurr(1);
    if (mm.current) {
      timeoutRef.timer.run(600, () => {
        debounceCenterNode(matchItems[0]);
      });
    }
  }, [filteredMap]);

  const handleCenterNode = (matchId) => {
    let isMatchTarget = false;
    mm.current.g.selectAll('g').filter((d) => {
      const { id = '', x0, y0 } = d.data.state;
      const matchTarget = `${id}` === matchId;
      if (!isMatchTarget && matchTarget) {
        utils.toolActions.centerNode(mm.current, y0, x0);
        isMatchTarget = true;
        const $con = document.getElementById(`mm-match-${id}`);
        if ($con) {
          mm.current.svg
            .node()
            .querySelectorAll('.mm-match-text')
            .forEach(($item) => {
              $item.classList.replace('bg-4', 'bg-1');
            });
          $con.classList.replace('bg-1', 'bg-4');
        }
        return true;
      }
      return false;
    });
  };

  const debounceCenterNode = useMemo(() => {
    return debounce(handleCenterNode, 200);
  }, []);

  const handleNav = (e) => {
    const { key } = e.currentTarget.dataset;
    if (!hasMoreCount) {
      return;
    }
    let nextCurr = curr;
    if (key === 'left') {
      const prev = curr - 1;
      nextCurr = prev < 1 ? allCount : prev;
    } else {
      const next = curr + 1;
      nextCurr = next > allCount + 1 ? 1 : next;
    }
    setCurr(nextCurr);
    debounceCenterNode(matchItems[nextCurr - 1]);
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
