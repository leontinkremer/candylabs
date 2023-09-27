// built-in modules
import React from "react";
import Checkbox from "../Checkbox";

const InsurancesStep = ({ insurances, handleCheckboxChange, handleClick }) => {
  return (
    <>
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Kontaktdaten
              </span>
            </div>
          </li>
          <li className="inline-flex items-center">
            <svg
              className="w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-gray-400 dark:hover:text-white">
              Versicherungen
            </span>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Absenden
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="block p-10 border-gray-200 max-w-xxl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Versicherungen
          </h5>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
            Bitte wählen Sie die Versicherungen aus, die Sie bereits
            abgeschlossen haben.
          </p>
        </div>

        <fieldset className="mb-4">
          <legend className="sr-only">Checkbox variants</legend>
          {Object.entries(insurances).map(([key, insurance], index) => (
            <Checkbox
              key={insurance.id}
              id={insurance.id}
              checked={insurance.available}
              handleCheckboxChange={handleCheckboxChange}
            >
              {insurance.label}
            </Checkbox>
          ))}
        </fieldset>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Angaben überprüfen
          <svg
            className="w-4 h-4 ml-2 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default InsurancesStep;
