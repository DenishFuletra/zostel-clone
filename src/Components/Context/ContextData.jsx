import { createContext, useState } from "react";
export const ContextData = createContext();
function ContextDataProvider({ children }) {
  const [countRoom, setcountRoom] = useState({
    room1: 1,
    room2: 1,
    room3: 1,
  });
  function setroom1(val) {
    setcountRoom({ ...countRoom, room1: val });
  }
  function setroom2(val) {
    setcountRoom({ ...countRoom, room2: val });
  }
  function setroom3(val) {
    setcountRoom({ ...countRoom, room3: val });
  }
  return (
    <ContextData.Provider value={{ countRoom, setroom1, setroom2, setroom3 }}>
      {children}
    </ContextData.Provider>
  );
}
export default ContextDataProvider;
