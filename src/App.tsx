import { FormEvent, useState } from "react";
import { Goal } from "./form/Goal";
import { Experience } from "./form/Experience";
import { Days } from "./form/Days";
import { useMultistepForm } from "./useMultistepForm";

export type FormData = {
  goal: "muscle" | "powerlifting" | null;
  experience: "beg-int" | "int-adv" | null;
  days: 2 | 3 | 4 | 5 | 6 | null;
};

const INITIAL_DATA: FormData = {
  goal: null,
  experience: null,
  days: null,
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      // Prevent unwanted combinations when user goes back and changes selection
      if (fields.experience && fields.experience !== prev.experience) {
        return { ...prev, ...fields, days: null };
      }
      if (fields.goal && fields.goal !== prev.goal) {
        return { ...prev, ...fields, experience: null };
      }
      return { ...prev, ...fields };
    });
  }

  const { step, steps, prevStep, nextStep, isFirstStep, isLastStep, currStepIdx } =
    useMultistepForm([
      <Goal {...data} updateFields={updateFields} />,
      <Experience {...data} updateFields={updateFields} />,
      <Days {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (currStepIdx === 0 && data.goal === null) {
      setErrorMessage("Please select a goal");
      return;
    }
    if (currStepIdx === 1 && data.experience === null) {
      setErrorMessage("Please select an experience level");
      return;
    }
    if (currStepIdx === 2 && data.days === null) {
      setErrorMessage("Please select a number of days");
      return;
    }

    if (!isLastStep) {
      nextStep();
    } else {
      alert(JSON.stringify(data, null, 2));
    }
  }

  return (
    <div className="relative grid justify-center p-8 max-w-5xl mx-auto m-4">
      <div className="absolute top-2 right-3">
        {currStepIdx + 1} / {steps.length}
      </div>
      <form className="grid justify-center pb-4" onSubmit={onSubmit}>
        {step}
        <div className="flex pt-4 gap-4 justify-center">
          {!isFirstStep && (
            <button
              type="button"
              className="border border-black rounded-md py-1 px-2 w-20 bg-gray-300"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          <button type="submit" className="border border-black rounded-md p-1 w-20 bg-gray-300">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
        {errorMessage && <div className="text-red-500 pt-4 text-center">* {errorMessage}</div>}
      </form>
    </div>
  );
}
