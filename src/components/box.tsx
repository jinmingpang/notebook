import React from 'react';

function Box(props: any) {
  const { children, css } = props;

  return (
    <div className="box">
      {css && <style>{css}</style>}
      {children}
    </div>
  );
}

export default Box;
