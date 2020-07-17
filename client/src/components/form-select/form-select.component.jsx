import React from 'react';

import './form-select.styles.scss';

const FormSelect = ({ handleChange, label, options, ...otherProps }) => (
  <div className='group'>
    <div className='tittle'>{label}</div>
    <select className='form-select' onChange={handleChange} {...otherProps} >
      {
        options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))
      }
    </select>
  </div>
);

export default FormSelect;
