import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currStepIdx, setCurrStepIdx] = useState(0);

  function nextStep() {
    setCurrStepIdx((i) => {
      if (i < steps.length - 1) {
        return i + 1;
      }
      return i;
    });
  }

  function prevStep() {
    setCurrStepIdx((i) => {
      if (i > 0) {
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
    isFirstStep: currStepIdx === 0,
    isLastStep: currStepIdx === steps.length - 1,
    nextStep,
    prevStep,
    goToStep,
  };
}
