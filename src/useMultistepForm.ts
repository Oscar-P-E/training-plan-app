import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currStepIdx, setCurrStepIdx] = useState(1);

  function nextStep() {
    setCurrStepIdx((i) => {
      if (i < steps.length) {
        return i + 1;
      }
      return i;
    });
  }

  function prevStep() {
    setCurrStepIdx((i) => {
      if (i > 1) {
        return i - 1;
      }
      return i;
    });
  }

  function goToStep(stepIdx: number) {
    setCurrStepIdx(stepIdx);
  }

  return {
    currStepIdx,
    step: steps[currStepIdx],
    steps,
    isFirstStep: currStepIdx === 1,
    isLastStep: currStepIdx === steps.length,
    nextStep,
    prevStep,
    goToStep,
  };
}
