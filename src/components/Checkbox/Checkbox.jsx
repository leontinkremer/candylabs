// built-in modules
import React, { useState } from "react";

const Checkbox = ({ id, checked, children, handleCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    setIsChecked((prevState) => !prevState);
    handleCheckboxChange(e);
  };

  console.log("id", id);
  console.log("checked", isChecked);
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChange}
      ></input>
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
