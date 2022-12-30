import React, { useState } from 'react';

import Select from 'react-select';
import PropTypes from 'prop-types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: '100%',
    borderRadius: '0.5rem', // Ubah tinggi Select disini
  }),
};

function InputSelect() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Select
      className="h-full"
      styles={customStyles}
      classNamePrefix="select"
      defaultValue={options[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable
      isSearchable
      name="color"
      options={options}
    />
  );
}

export default InputSelect;
