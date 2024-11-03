import React, { FormEventHandler, useState } from "react";
import NumericInput from "./components/input";
import fetchFromAPI from "./service/api";

const App: React.FC = () => {
  const [startValue, setStart] = useState<number | "">("");
  const [endValue, setEnd] = useState<number | "">("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const validateNumbers = (newNum1: number | "", newNum2: number | "") => {
    if (newNum1 !== "" && newNum2 !== "" && newNum1 >= newNum2) {
      setError("Starting number is greater or equal to the ending number.");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleStartChange = (value: number | "") => {
    setResult("");
    setStart(value);
    validateNumbers(value, endValue);
  };

  const handleEndChange = (value: number | "") => {
    setResult("");
    setEnd(value);
    validateNumbers(startValue, value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (error || startValue === "" || endValue === "") {
      return;
    }

    fetchFromAPI(startValue, endValue).then(
      (result) => setResult(result),
      (error) => setError(error.message),
    );
  };

  return (
    <div className="flex w-1/3 text-white">
      <form
        className={`p-6 w-full rounded-md shadow-lg bg-white/30 bg-opacity-40 backdrop-filter backdrop-blur-md ring-1 ring-black/5 ${error || result ? "pb-0" : ""
          }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-semibold mb-3">
          Calculate the LCM of the Interval
        </h2>

        <div className="flex space-x-4 mb-4 items-center">
          <NumericInput
            placeholder="Start"
            value={startValue}
            onChange={handleStartChange}
          />
          <span className="text-xl">:</span>
          <NumericInput
            placeholder="End"
            value={endValue}
            onChange={handleEndChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 py-3 rounded shadow-md hover:bg-orange-600 transition-all duration-150"
        >
          Submit
        </button>

        <div
          className={`mt-3 mb-4 py-1 rounded text-base overflow-wrap break-words
            ${error ? "bg-red-600 transition-all shadow-md " : result ? "bg-green-600 transition-all shadow-md" : ""}`}
        >
          <p className="px-2">{error || result}</p>
        </div>
      </form>
    </div>
  );
};

export default App;
