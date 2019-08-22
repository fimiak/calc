import React from 'react';

const Clear = ({ className, onClick, value }) => (
  <button className={className} onClick={onClick}>
    {value}
  </button>
);

export default Clear;
