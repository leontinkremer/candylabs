// built-in modules
import React from "react";

const SuccessStep = ({ handleClick }) => {
  return (
    <>
      <div className="block p-10 border-gray-200 max-w-xxl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-col items-center ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Vielen Dank
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            Ihre Angaben wurden erfolgreich übermittelt. Wir werden uns
            innerhalb von 3 Werktagen bei Ihnen melden.
          </p>
          <button
            type="button"
            className="mt-5 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            Zur Startseite
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessStep;
