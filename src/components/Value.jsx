import React, { useState } from 'react';

function Value() {
  const [value, setValue] = useState('Empty string');

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>{value}</h1>
      <input type='text' value={value} onChange={changeValue} />
    </div>
  );
}

export default Value;
