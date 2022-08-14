import React from 'react';
import cls from 'classnames'
import kebabCase from 'lodash/kebabCase'

function Text(props: any) {
  const { children, ...reset } = props
  const clsStr= cls(reset).split(' ').map((i) => kebabCase(i)).join(' ')

  return (
    <span className={clsStr}>
      {children}
    </span>
  );
}

export default Text
