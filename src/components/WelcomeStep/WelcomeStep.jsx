// built-in modules
import React from "react";

const WelcomeStep = ({
  handleClick,
  handleFirstNameChange,
  handleLastNameChange,
}) => {
  // const [firstName, setFirstName] = useState();
  // const handleFirstNameChange = (data) => {
  //   // console.log("data.target.name", data.target.name);
  //   console.log("data.target.value", data.target.value);
  //   setFirstName(data.target.value);
  //   // setContent(data.target.value);
  // };

  return (
    <>
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Kontaktdaten
            </a>
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
                Versicherungen
              </span>
            </div>
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
        <div className="h-24">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Willkommen
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Bitte geben Sie die persönlichen Daten ein.
          </p>
        </div>

        <form>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Max"
              required
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mustermann"
              required
              onChange={handleLastNameChange}
            />
          </div>

          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            Zu den Versicherungen
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
        </form>
      </div>
    </>
  );
};

export default WelcomeStep;
