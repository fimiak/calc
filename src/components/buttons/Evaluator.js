import React from 'react';

const Evaluator = ({ className, value, onClick }) => {
  return (
    <button className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Evaluator;
