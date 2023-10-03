import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Goal({ goal, updateFields }: Props) {
  return (
    <FormWrapper title="Primary goal">
      <div className="grid grid-flow-row gap-2">
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
            goal === "muscle" ? "bg-purple-700 text-yellow-300 font-bold" : "bg-gray-300 hover:bg-gray-400"
          }`}
          htmlFor="muscle"
        >
          Build Muscle
        </label>
        <input
          className="button-radio-input"
          type="radio"
          id="strength"
          name="goal"
          value="strength"
          checked={goal === "strength"}
          onChange={(e) => updateFields({ goal: e.target.value as FormData["goal"] })}
        />
        <label
          className={`button-radio-label py-2 px-4 rounded-xl text-center ${
            goal === "strength" ? "bg-gray-950 text-red-600 font-bold" : "bg-gray-300 hover:bg-gray-400"
          }`}
          htmlFor="strength"
        >
          Build Strength
        </label>
      </div>
    </FormWrapper>
  );
}
