import React from 'react';

export default function Highlight({ children, color }: any) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  );
}
