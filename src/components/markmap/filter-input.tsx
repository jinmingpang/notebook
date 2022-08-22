/**
 * 优化操作选项
 */

import React, { useState, useMemo } from 'react';
import { walkTree } from 'markmap-common';
import debounce from 'lodash/debounce';
import isString from 'lodash/isString';
import lowerCase from 'lodash/lowerCase';
import isEmpty from 'lodash/isEmpty';

import FilterStep from './filter-step';
import utils from './utils';

import style from './markmap.module.less';

const FilterInput = (props: any) => {
  const { mm } = props;
  const [text, setText] = useState('');
  const [filteredMap, setFilteredMap] = useState({});

  const doFilter = (filterText: string) => {
    const { state, flatData } = mm.current;

    const filteredMap = {};

    if (!filterText) {
      utils.toolActions.allOpen(mm.current);
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

export default FilterInput;
