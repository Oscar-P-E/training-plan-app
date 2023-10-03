import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Experience({ experience, updateFields }: Props) {
  return (
    <FormWrapper title="Experience level">
      <input
        className="button-radio-input"
        type="radio"
        id="beginner"
        name="experience"
        value="beginner"
        checked={experience === "beginner"}
        onChange={(e) => updateFields({ experience: e.target.value as FormData["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center rounded-l-xl ${
          experience === "beginner" ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="beginner"
      >
        Beginner
      </label>
      <input
        className="button-radio-input"
        type="radio"
        id="intermediate"
        name="experience"
        value="intermediate"
        checked={experience === "intermediate"}
        onChange={(e) => updateFields({ experience: e.target.value as FormData["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center ${
          experience === "intermediate" ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="intermediate"
      >
        Intermediate
      </label>
      <input
        className="button-radio-input"
        type="radio"
        id="advanced"
        name="experience"
        value="advanced"
        checked={experience === "advanced"}
        onChange={(e) => updateFields({ experience: e.target.value as FormData["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center rounded-r-xl ${
          experience === "advanced" ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="advanced"
      >
        Advanced
      </label>
    </FormWrapper>
  );
}
