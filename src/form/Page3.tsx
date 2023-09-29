import { FormWrapper } from "../FormWrapper";

export type Data = {
  goal: "muscle" | "powerlifting" | "powerbuilding";
};

type Props = Data & { updateFields: (fields: Partial<Data>) => void };

export function Page3({ goal, updateFields }: Props) {
  return (
    <FormWrapper title="Choose your goal">
      <div className="grid grid-flow-row gap-2">
        <input
          className="button-radio-input"
          type="radio"
          id="muscle"
          name="goal"
          value="muscle"
          checked={goal === "muscle"}
          onChange={(e) => updateFields({ goal: e.target.value as Data["goal"] })}
        />
        <label
          className={`button-radio-label  py-2 px-4 rounded-xl text-center
        ${goal === "muscle" ? "bg-orange-500" :  "bg-gray-300 hover:bg-gray-400"}`}
          htmlFor="muscle"
        >
          Hypertrophy
        </label>
        <input
          className="button-radio-input"
          type="radio"
          id="powerlifting"
          name="goal"
          value="powerlifting"
          checked={goal === "powerlifting"}
          onChange={(e) => updateFields({ goal: e.target.value as Data["goal"] })}
        />
        <label
          className={`button-radio-label py-2 px-4 rounded-xl text-center
    ${goal === "powerlifting" ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"}`}
          htmlFor="powerlifting"
        >
          Powerlifting
        </label>
        <input
          className="button-radio-input"
          type="radio"
          id="powerbuilding"
          name="goal"
          value="powerbuilding"
          checked={goal === "powerbuilding"}
          onChange={(e) => updateFields({ goal: e.target.value as Data["goal"] })}
        />
        <label
          className={`button-radio-label  py-2 px-4 rounded-xl text-center bg-
        ${goal === "powerbuilding" ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
          htmlFor="powerbuilding"
        >
          Powerbuilding
        </label>
      </div>
    </FormWrapper>
  );
}
