import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Goal({ goal, updateFields }: Props) {
  return (
    <FormWrapper title="Primary goal">
      {/* <div className="grid grid-flow-row gap-2"> */}
        <input
          className="button-radio-input"
          type="radio"
          id="muscle"
          name="goal"
          value="muscle"
          checked={goal === "muscle"}
          onChange={(e) => updateFields({ goal: e.target.value as FormData["goal"] })}
        />
        <label
          className={`button-radio-label  py-2 px-4 rounded-xl text-center ${
            goal === "muscle"
              ? "bg-amber-500"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          htmlFor="muscle"
        >
          Gain muscle - I want to get bigger (and also stronger in general)
        </label>
        <input
          className="button-radio-input"
          type="radio"
          id="powerlifting"
          name="goal"
          value="powerlifting"
          checked={goal === "powerlifting"}
          onChange={(e) => updateFields({ goal: e.target.value as FormData["goal"] })}
        />
        <label
          className={`button-radio-label py-2 px-4 rounded-xl text-center ${
            goal === "powerlifting"
              ? "bg-amber-500"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          htmlFor="powerlifting"
        >
          Powerlifting - I want to increase my 1RM in the squat/bench/deadlift
        </label>
      {/* </div> */}
    </FormWrapper>
  );
}
