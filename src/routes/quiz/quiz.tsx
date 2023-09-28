// import { useMultistepForm } from "../../useMultistepForm";
// import { Complexity } from "./complexity";
// import { Days } from "./days-per-week";
// import { Experience } from "./experience";
// import { Goal } from "./goal";

import { Outlet } from "react-router-dom";

// type FormData = {
// complexity: "low" | "balanced" | "max";
// customisation: ExerciseData;
// days: number;
// experience: "new" | "beginner" | "intermediate" | "advanced";
// goal: "strength" | "hypertrophy" | "powerlifting" | "hybrid";
// };

// type ExerciseData = {
// chest: string[];
// back: string[];
// quads: string[];
// hams: string[];
// biceps: string[];
// triceps: string[];
// shouldersTraps: string[];
// calves: string[];
// abs: string[];
// rhombRearDelts: string[];
// glutes: string[];
// traps: string[];
// forearms: string[];
// neck: string[];
// anteriorDelts: string[];
// lowBack: string[];
// };

// const INITIAL_DATA: FormData = {
// complexity: "balanced",
// customisation: {
//   chest: ["Barbell Bench Press (Wide Grip)"],
//   back: ["Seated Rows (Hammer Grip, Elbows Tucked)"],
//   quads: ["Barbell Squat (High Bar)"],
//   hams: ["Barbell Romanian Deadlift"],
//   biceps: ["Barbell Curl"],
//   triceps: ["Rope Pushdown"],
//   shouldersTraps: ["Dumbbell Lateral Raise"],
//   calves: [],
//   abs: [],
//   rhombRearDelts: [],
//   glutes: [],
//   traps: [],
//   forearms: [],
//   neck: [],
//   anteriorDelts: [],
//   lowBack: [],
// },
// days: 3,
// experience: "new",
// goal: "strength",
// };

export const Quiz = () => {
  // const { data, setData } = useState({ INITIAL_DATA });
  // const {
  //   step,
  //   steps,
  //   currStepIdx,
  //   nextStep,
  //   prevStep,
  //   isFirstStep,
  //   isLastStep,
  // } = useMultistepForm([
  // <Experience />,
  // <Complexity />,
  // <Goal />,
  // <Days />
  // ]);

  return (
    // <div className="relative, bg-white, border-1">
    <div>
      Hello
      {/* <form></form> */}
      <Outlet />
    </div>
  );
};
