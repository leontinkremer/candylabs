import React, { useEffect, useState } from "react";
import WelcomeStep from "../WelcomeStep/WelcomeStep";
import InsurancesStep from "../InsurancesStep/InsurancesStep";
import ConfirmationStep from "../ConfirmationStep";
import SuccessStep from "../SuccessStep";

const RegistrationForm = () => {
  const [step, setStep] = useState("welcome");

  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    insurances: [
      {
        id: "sickness_insurance",
        label: "Krankenversicherung",
        available: false,
      },
      {
        id: "car_insurance",
        label: "KFZ-Versicherung",
        available: false,
      },
    ],
  });

  useEffect(() => {
    console.log("personalData", personalData);
  }, [personalData]);

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setPersonalData((prevState) => ({ ...prevState, firstName: value }));
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setPersonalData((prevState) => ({ ...prevState, lastName: value }));
  };

  const handleCheckboxChange = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;

    setPersonalData((prevState) => {
      const updatedInsurances = prevState.insurances.map((insurance) => {
        if (insurance.id === id) {
          return { ...insurance, available: checked };
        }
        return insurance;
      });
      return { ...prevState, insurances: updatedInsurances };
    });
  };

  const handleWelcomeClick = () => {
    setStep("insurances");
  };

  const handleInsurancesClick = () => {
    setStep("confirmation");
  };

  const handleConfirmationClick = () => {
    console.log("personalData", personalData);
    setStep("success");
  };

  let CurrentStep;

  switch (step) {
    case "welcome":
      CurrentStep = (
        <WelcomeStep
          handleClick={handleWelcomeClick}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />
      );
      break;
    case "insurances":
      CurrentStep = (
        <InsurancesStep
          insurances={personalData.insurances}
          handleCheckboxChange={handleCheckboxChange}
          handleClick={handleInsurancesClick}
        />
      );
      break;
    case "confirmation":
      CurrentStep = (
        <ConfirmationStep
          data={personalData}
          handleClick={handleConfirmationClick}
        />
      );
      break;
    case "success":
      CurrentStep = <SuccessStep />;
      break;
    default:
      CurrentStep = <div>Ungültiger Schritt</div>;
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-20 px-80">
      <div className="min-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {CurrentStep}
      </div>
    </main>
  );
};

export default RegistrationForm;
