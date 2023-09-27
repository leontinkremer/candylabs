// built-in modules
import React from "react";
import Checkbox from "../Checkbox";

const SuccessStep = ({ data }) => {
  return (
    <>
      <div className="block p-10 border-gray-200 max-w-xxl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="h-24">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vielen Dank
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ihre Angaben wurden erfolgreich übermittelt. Wir werden uns
            innerhalb von 3 Werktagen bei Ihnen melden.
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessStep;
