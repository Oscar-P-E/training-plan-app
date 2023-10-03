import { FormEvent, useState } from "react";
import { Goal } from "./form/Goal";
import { Experience } from "./form/Experience";
import { Complication } from "./form/Complication";
import { Days } from "./form/Days";
import { useMultistepForm } from "./useMultistepForm";

export type FormData = {
  goal: "muscle" | "strength";
  experience: "beginner" | "intermediate" | "advanced";
  complication: "min" | "auto" | "max";
  days: 2 | 3 | 4 | 5 | 6;
};

const INITIAL_DATA: FormData = {
  goal: "muscle",
  experience: "beginner",
  complication: "auto",
  days: 3,
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, steps, prevStep, nextStep, isFirstStep, isLastStep, currStepIdx } = useMultistepForm([
    <Goal {...data} updateFields={updateFields} />,
    <Experience {...data} updateFields={updateFields} />,
    <Complication {...data} updateFields={updateFields} />,
    <Days {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(step);
    if (!isLastStep) return nextStep();

    alert(JSON.stringify(data, null, 2));
  }

  return (
    <div className="relative grid justify-center border border-black rounded-lg p-8 max-w-5xl mx-auto m-4">
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
          <button type="submit" className="border border-black rounded-md p-1 w-20 bg-gray-300" onClick={nextStep}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
