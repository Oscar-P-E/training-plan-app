import { FormWrapper } from "../FormWrapper";

export type Data = {
  experience: "none" | "beginner" | "intermediate" | "advanced";
};

type Props = Data & { updateFields: (fields: Partial<Data>) => void };

export function Page1({ experience, updateFields }: Props) {
  return (
    <FormWrapper title="Experience level">
      <input
        className="button-radio-input"
        type="radio"
        id="none"
        name="experience"
        value="none"
        checked={experience === "none"}
        onChange={(e) => updateFields({ experience: e.target.value as Data["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-l-xl text-center ${
          experience === "none" ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="none"
      >
        None
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="beginner"
        name="experience"
        value="beginner"
        checked={experience === "beginner"}
        onChange={(e) => updateFields({ experience: e.target.value as Data["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 text-center ${
          experience === "beginner" ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"
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
        onChange={(e) => updateFields({ experience: e.target.value as Data["experience"] })}
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
        onChange={(e) => updateFields({ experience: e.target.value as Data["experience"] })}
      />
      <label
        className={`button-radio-label py-2 px-4 rounded-r-xl text-center ${
          experience === "advanced" ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
        htmlFor="advanced"
      >
        Advanced
      </label>
    </FormWrapper>
  );
}
