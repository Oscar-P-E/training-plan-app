import { FormWrapper } from "../FormWrapper";

export type Data = {
  complexity: "min" | "auto" | "max";
};

type Props = Data & { updateFields: (fields: Partial<Data>) => void };

export function Page2({ complexity, updateFields }: Props) {
  return (
    <FormWrapper title="Complexity level">
      <input
        className="button-radio-input"
        type="radio"
        id="min"
        name="complexity"
        value="min"
        checked={complexity === "min"}
        onChange={(e) => updateFields({ complexity: e.target.value as Data["complexity"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-l-xl text-center
        ${complexity === "min" ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"}`}
        htmlFor="min"
      >
        Simple
      </label>
      <input
        className="button-radio-input"
        type="radio"
        id="auto"
        name="complexity"
        value="auto"
        checked={complexity === "auto"}
        onChange={(e) => updateFields({ complexity: e.target.value as Data["complexity"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center ${
          complexity === "auto" ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="auto"
      >
        Appropriate
      </label>
      <input
        className="button-radio-input"
        type="radio"
        id="max"
        name="complexity"
        value="max"
        checked={complexity === "max"}
        onChange={(e) => updateFields({ complexity: e.target.value as Data["complexity"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-r-xl text-center
        ${complexity === "max" ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
        htmlFor="max"
      >
        Maximum
      </label>
    </FormWrapper>
  );
}
