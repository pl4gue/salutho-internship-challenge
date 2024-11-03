import React from "react";

interface NumericInputProps {
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
  placeholder = "",
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || /^[0-9]+$/.test(value)) {
      onChange(value === "" ? "" : Number(value));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = e.key;

    if (
      !/\d|Backspace|Delete|Tab|Arrow(Down|Up|Left|Right)|End|Home|Escape/.test(
        char,
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="text-white w-full border border-gray-400 p-2 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 placeholder-gray-300 flex-1"
        />
        </div>
  );
};

export default NumericInput;
