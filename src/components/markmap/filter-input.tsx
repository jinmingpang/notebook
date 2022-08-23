/**
 * 优化操作选项
 */

import React, { useState, useMemo } from 'react';
import { walkTree } from 'markmap-common';
import debounce from 'lodash/debounce';
import isString from 'lodash/isString';
import lowerCase from 'lodash/lowerCase';
import isEmpty from 'lodash/isEmpty';
import toLower from 'lodash/toLower';

import FilterStep from './filter-step';
import utils from './utils';
import style from './index.module.less';

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
      const { content, parents, id } = item;
      const index = lowerCase(content).indexOf(lowerCase(filterText));
      if (index > -1) {
        const len = filterText.length;
        const matchContent = `${content.slice(
          0,
          index,
        )}<span id="mm-match-${id}" class="mm-match-text b bg-1">${content.slice(
          index,
          index + len,
        )}</span>${content.slice(index + len)}`;
        parents.forEach((parentId) => {
          if (!filteredMap[parentId]) {
            filteredMap[parentId] = true;
          }
        });
        filteredMap[id] = matchContent;
      }
    });

    if (isEmpty(filteredMap)) {
      setFilteredMap({ empty: true });
      return;
    }

    walkTree(state.data, (item, next) => {
      const matchContent = filteredMap[item.state.id];
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
  };

  const handleClear = () => {
    setText('');
    handleFilter('');
    setFilteredMap({});
  };

  const handleKeyDown = (e) => {
    if (toLower(e.code) === 'enter') {
      handleFilter(text);
    }
  };

  return (
    <div className={style.filterWrap}>
      <input
        placeholder="搜索..."
        className={style.filterInput}
        value={text}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      {!isEmpty(filteredMap) && (
        <FilterStep filteredMap={filteredMap} onClear={handleClear} mm={mm} />
      )}
    </div>
  );
};

export default FilterInput;
