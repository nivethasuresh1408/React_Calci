import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {

      let expression = input
        .replace(/tan/g, "Math.tan")
        .replace(/cos/g, "Math.cos")
        .replace(/sec/g, "(1/Math.cos)")
        .replace(/√/g, "Math.sqrt")
        .replace(/\^/g, "**")
        .replace(/mod/g, "%");

      setInput(eval(expression).toString());

    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">

      <h1 className="title">Scientific Calculator</h1>

      <input className="display" value={input} readOnly />

      <div className="buttons">

        <button onClick={clearDisplay} className="operator">C</button>
        <button onClick={deleteLast} className="operator">DEL</button>
        <button onClick={() => handleClick("mod")} className="operator">mod</button>
        <button onClick={() => handleClick("/")} className="operator">÷</button>

        <button onClick={() => handleClick("tan(")}>tan</button>
        <button onClick={() => handleClick("cos(")}>cos</button>
        <button onClick={() => handleClick("sec(")}>sec</button>
        <button onClick={() => handleClick("*")} className="operator">×</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")} className="operator">−</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")} className="operator">+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("^")} className="operator">x²</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("√(")}>√</button>
        <button className="equal" onClick={calculate}>=</button>

      </div>

    </div>
  );
}

export default Calculator;