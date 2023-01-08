import React from "react";

export default function Counter() {
  return (
    <div>
      <div>
        <button id="descrbtn">-</button>
        <input type="number" id="countval" min={1} max={10} value={1} />
        <button
          id="incrbtn"
          onClick={() => {
            let val = document.getElementById("countval").value;
            val++;
            document.getElementById("countval");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
