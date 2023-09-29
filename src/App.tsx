import { FormEvent, useState } from "react";
import { Page1 } from "./form/Page1";
import { Page2 } from "./form/Page2";
import { Page3 } from "./form/Page3";
import { Page4 } from "./form/Page4";
import { useMultistepForm } from "./useMultistepForm";
import { Data as Page1Data } from "./form/Page1";
import { Data as Page2Data } from "./form/Page2";
import { Data as Page3Data } from "./form/Page3";
import { Data as Page4Data } from "./form/Page4";

type FormData = {
  experience: Page1Data["experience"];
  complexity: Page2Data["complexity"];
  goal: Page3Data["goal"];
  days: Page4Data["days"];
};

const INITIAL_DATA: FormData = {
  experience: "beginner",
  complexity: "auto",
  goal: "powerbuilding",
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
    <Page1 {...data} updateFields={updateFields} />,
    <Page2 {...data} updateFields={updateFields} />,
    <Page3 {...data} updateFields={updateFields} />,
    <Page4 {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextStep();
    else alert("Form submitted!");
  }

  return (
    <div className="relative grid justify-center border border-black rounded-lg p-8 max-w-5xl mx-auto">
      <div className="absolute top-2 right-3">
        {currStepIdx + 1} / {steps.length}
      </div>
      <form className="grid justify-center pb-4" onSubmit={onSubmit}>
        {step}
      </form>
      <div className="flex pt-4 gap-4 justify-center">
        {!isFirstStep && (
          <button className="border border-black rounded-md py-1 px-2 w-20 bg-gray-300" onClick={prevStep}>
            Back
          </button>
        )}
        <button className="border border-black rounded-md p-1 w-20 bg-gray-300" onClick={nextStep}>
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
