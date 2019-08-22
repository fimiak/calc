import React from 'react';
import { addNum } from '../../redux/actions';

const AddNum = ({ className, value, onClick }) => (
  <button className={className} onClick={onClick} value={value}>
    {value}
  </button>
);

export default AddNum;
