import { FormWrapper } from "../FormWrapper";

export type Data = {
  days: 2 | 3 | 4 | 5 | 6;
};

type Props = Data & { updateFields: (fields: Partial<Data>) => void };

export function Page4({ days, updateFields }: Props) {
  return (
    <FormWrapper title="Days per week">
      <input
        className="button-radio-input"
        type="radio"
        id="2"
        name="days"
        value={2}
        checked={days === 2}
        onChange={(e) => updateFields({ days: parseInt(e.target.value) as Data["days"] })}
      />
      <label
        className={`button-radio-label  py-2 px-4 rounded-l-xl text-center
        ${days === 2 ? "bg-sky-500" : "bg-gray-300 hover:bg-gray-400"}`}
        htmlFor="2"
      >
        2
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="3"
        name="days"
        value={3}
        checked={days === 3}
        onChange={(e) => updateFields({ days: parseInt(e.target.value) as Data["days"] })}
      />
      <label
        className={`button-radio-label  py-2 px-4 text-center
    ${days === 3 ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"}`}
        htmlFor="3"
      >
        3
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="4"
        name="days"
        value={4}
        checked={days === 4}
        onChange={(e) => updateFields({ days: parseInt(e.target.value) as Data["days"] })}
      />
      <label
        className={`button-radio-label  py-2 px-4 text-center
        ${days === 4 ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
        htmlFor="4"
      >
        4
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="5"
        name="days"
        value={5}
        checked={days === 5}
        onChange={(e) => updateFields({ days: parseInt(e.target.value) as Data["days"] })}
      />
      <label
        className={`button-radio-label  py-2 px-4 text-center
        ${days === 5 ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
        htmlFor="5"
      >
        5
      </label>

      <input
        className="button-radio-input"
        type="radio"
        id="6"
        name="days"
        value={6}
        checked={days === 6}
        onChange={(e) => updateFields({ days: parseInt(e.target.value) as Data["days"] })}
      />
      <label
        className={`button-radio-label  py-2 px-4 rounded-r-xl text-center
        ${days === 6 ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"}
        `}
        htmlFor="6"
      >
        6
      </label>
    </FormWrapper>
  );
}
