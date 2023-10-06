import { FormWrapper } from "../FormWrapper";
import { FormData } from "../App";

type Props = FormData & { updateFields: (fields: Partial<FormData>) => void };

export function Days({ goal, experience, days, updateFields }: Props) {
  const options = [
    { value: 2, color: "bg-sky-500" },
    { value: 3, color: "bg-green-500" },
    { value: 4, color: "bg-yellow-500" },
    { value: 5, color: "bg-orange-500" },
    { value: 6, color: "bg-red-500" },
  ];

  const isDisabled = (value: number) => {
    if (experience === "int-adv" && value < 4) return true;
    if (goal === "powerlifting" && value > 5) return true;
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
            } ${isDisabled(option.value) && "opacity-30 cursor-not-allowed"}
            ${index === 0 ? "rounded-t-xl" : ""} ${
              index === options.length - 1 ? "rounded-b-xl" : ""
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

// 12 Possible Combinations:
// muscle, beginner, 2
// muscle, beginner, 3
// muscle, beginner, 4
// muscle, intermediate, 4
// muscle, intermediate, 5
// muscle, intermediate, 6
// muscle, advanced, 6
// strength, beginner, 2
// strength, beginner, 3
// strength, beginner, 4
// strength, intermediate, 3
// strength, intermediate, 4
