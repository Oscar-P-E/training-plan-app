import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Experience({ experience, updateFields }: Props) {
  return (
    <FormWrapper title="Experience level">
      <input
        className="button-radio-input"
        type="radio"
        id="beg-int"
        name="experience"
        value="beg-int"
        checked={experience === "beg-int"}
        onChange={(e) => updateFields({ experience: e.target.value as FormData["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center rounded-xl ${
          experience === "beg-int" ? "bg-amber-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="beg-int"
      >
        Beginner / Intermediate
      </label>
      <input
        className="button-radio-input"
        type="radio"
        id="int-adv"
        name="experience"
        value="int-adv"
        checked={experience === "int-adv"}
        onChange={(e) => updateFields({ experience: e.target.value as FormData["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center rounded-xl ${
          experience === "int-adv" ? "bg-amber-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="int-adv"
      >
        Intermediate / Advanced
      </label>
    </FormWrapper>
  );
}
