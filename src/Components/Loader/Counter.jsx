import React from "react";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
function Counter1() {
  const { countRoom, setroom1, setroom2, setroom3 } = useContext(ContextData);

  console.log(countRoom.room1, countRoom.room2, countRoom.room3);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            var val = document.getElementById("countval").value;
            if (val > 0) {
              val--;
            }

            document.getElementById("countval").value = val;

            setroom1(val);
            console.log(val);
          }}
        >
          -
        </button>
        <input type="number" id="countval" value={countRoom.room1} />
        <button
          id="incrbtn"
          onClick={() => {
            var val = document.getElementById("countval").value;

            val = +val + 1;
            console.log(val);

            document.getElementById("countval").value = val;
            setroom1(val);
            console.log(val);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
function Counter2() {
  const { countRoom } = useContext(ContextData);
  const { room2 } = useContext(ContextData);
  console.log(countRoom.room2);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            let val = document.getElementById("countval").value;
            if (val > 0) {
              val--;
            }

            document.getElementById("countval").value = val;
            room2(val);
          }}
        >
          -
        </button>
        <input type="number" id="countval" min={1} max={10} value={1} />
        <button
          id="incrbtn"
          onClick={() => {
            let val = document.getElementById("countval").value;
            if (val <= 20) {
              val++;
            }

            document.getElementById("countval").value = val;
            room2(val);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
function Counter3() {
  const { countRoom } = useContext(ContextData);
  const { room3 } = useContext(ContextData);
  console.log(countRoom.room3);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            let val = document.getElementById("countval").value;
            if (val > 0) {
              val--;
            }

            document.getElementById("countval").value = val;
            room3(val);
          }}
        >
          -
        </button>
        <input type="number" id="countval" min={1} max={10} value={1} />
        <button
          id="incrbtn"
          onClick={() => {
            let val = document.getElementById("countval").value;
            if (val <= 20) {
              val++;
            }

            document.getElementById("countval").value = val;
            room3(val);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export { Counter1, Counter2, Counter3 };
