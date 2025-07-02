import {useState} from "react";

const Rating = ({
  value: initialValue,
  name,
}: {
  value: number;
  name: string;
  onChange?: (value: number) => void;
}) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <>
      <span
        className="text-white cursor-pointer leading-none text-3xl"
        onMouseLeave={() => setHoverValue(null)}
      >
        {"★"
          .repeat(hoverValue || initialValue)
          .padEnd(5, "☆")
          .split("")
          .map((star, index) => (
            <button key={index} type="submit" onMouseMove={() => setHoverValue(index + 1)}>
              {star}
            </button>
          ))}
      </span>
      <input name={name} type="hidden" value={hoverValue || initialValue} />
    </>
  );
};

export default Rating;
