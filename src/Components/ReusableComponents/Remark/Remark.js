import React from 'react';
import './Remark.css';

const Remark = (props) => (
  <div className="remark">
    <span>{props.text}</span>
  </div>
);

export default Remark;
