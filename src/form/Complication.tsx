import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Complication({ experience, complication, updateFields }: Props) {
  return (
    <FormWrapper title="Complication level">
      <input
        className="button-radio-input"
        type="radio"
        id="min"
        name="complication"
        value="min"
        checked={complication === "min"}
        disabled={experience === "advanced"}
        onChange={(e) => updateFields({ complication: e.target.value as FormData["complication"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-l-xl text-center
        ${complication === "min" ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"}
        ${experience === "advanced" ? "opacity-50 cursor-not-allowed" : ""}
        `}
        htmlFor="min"
      >
        Minimal
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="auto"
        name="complication"
        value="auto"
        checked={complication === "auto"}
        onChange={(e) => updateFields({ complication: e.target.value as FormData["complication"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center ${
          complication === "auto" ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="auto"
      >
        Appropriate
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="max"
        name="complication"
        value="max"
        checked={complication === "max"}
        onChange={(e) => updateFields({ complication: e.target.value as FormData["complication"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-r-xl text-center
        ${complication === "max" ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
        htmlFor="max"
      >
        Maximum
      </label>
    </FormWrapper>
  );
}
