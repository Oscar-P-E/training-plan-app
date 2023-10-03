import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Days({ experience, days, updateFields }: Props) {
  const options = [
    { value: 2, color: "bg-sky-500" },
    { value: 3, color: "bg-green-500" },
    { value: 4, color: "bg-yellow-500" },
    { value: 5, color: "bg-orange-500" },
    { value: 6, color: "bg-red-500" },
  ];

  const isDisabled = (value: number) => {
    if (experience === "beginner" && value > 4) return true;
    if (experience === "intermediate" && value < 4) return true;
    if (experience === "advanced" && value !== 6) return true;
    return false;
  };

  return (
    <FormWrapper title="Days per week">
      {options.map((option, index) => (
        <>
          <input
            className="button-radio-input"
            type="radio"
            id={option.value.toString()}
            name="days"
            value={option.value}
            checked={days === option.value}
            disabled={isDisabled(option.value)}
            onChange={(e) => updateFields({ days: parseInt(e.target.value) as FormData["days"] })}
          />
          <label
            className={`button-radio-label py-2 px-4 text-center ${
              days === option.value ? option.color : "bg-gray-300 hover:bg-gray-400"
            } ${isDisabled(option.value) && "opacity-50 cursor-not-allowed"}
            ${index === 0 ? "rounded-l-xl" : ""} ${
              index === options.length - 1 ? "rounded-r-xl" : ""
            }`}
            htmlFor={option.value.toString()}
          >
            {option.value}
          </label>
        </>
      ))}
    </FormWrapper>
  );
}

// Combinations:
// muscle, beginner, 2 days
// muscle, beginner, 3 days
// muscle, beginner, 4 days
// strength, beginner, 2 days
// strength, beginner, 3 days
// strength, beginner, 4 days
// muscle, intermediate, 4 days
// muscle, intermediate, 5 days
// muscle, intermediate, 6 days
// strength, intermediate, 4 days
// strength, intermediate, 5 days
// strength, intermediate, 6 days
// muscle, advanced, 6 days
// strength, advanced, 6 days
