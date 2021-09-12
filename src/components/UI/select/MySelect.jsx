import React from 'react';

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export default MySelect;
