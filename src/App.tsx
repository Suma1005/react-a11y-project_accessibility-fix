import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handles form submission and performs calculation
  const handleCalculate = () => {
    console.log("button clicked");
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch {
      setError("Make sure you enter numbers correctly!");
      setResult(null);
    }
  };

  //  Improved text color contrast by changing it from #aaa to #757575
  //  to better meet accessibility standards.
  return (
    <main style={{ padding: "20px", backgroundColor: "#fff", color: "#757575" }}>
      {/* Accessible image with descriptive alt text */}
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beige twine roll with loose end on white background."
        width={600}
        height={400}
      />

      {/* Main heading of the application - changed h2 to h1 level*/}
      <h1>String Calculator</h1>

      {/* Form wrapper improves accessibility and allows Enter key submission */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          handleCalculate();
        }}
      >
        {/* Label associated with textarea for accessibility - changed h1 level to label*/}
        <label htmlFor="numbers">Enter numbers</label>


        <textarea
          style={{ margin: "10px 0", color: "#757575", display: "flex", width: '400px', height: '100px' }}
          id="numbers"
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* using Semantic button for form submission instead of div */}
        <button
          type="submit"
          // onClick={handleCalculate}
          style={{
            padding: "12px 20px",
            backgroundColor: "#007EA8",
            color: "#fff",
            border: "none",
          }}
        >
          Calculate
        </button>
      </form>

      {/* Show result only when calculation succeeds */}
      {result !== null && (
        <p aria-live="polite" style={{ color: "green" }}>
          {" "}
          Result: {result}
        </p>
      )}

      {/* Show error message when invalid input is detected */}
      {error && (
        <div role="alert" style={{ color: "red", padding: '10px 0px' }}>
          {error}
        </div>
      )}

      {/* <div role='alert'>
        <p>Make sure you enter numbers correctly!</p>
      </div> */}

    </main>
  );
};

export default App;
