import React from 'react';

const FormInput = ({ id, label, setValue, value, ...rest }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[600px] gap-1 ">
      <label htmlFor={id} className="self-start text-white">
        {label}
      </label>
      <input
        className="block p-2 w-[600px] rounded-sm"
        type="text"
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
