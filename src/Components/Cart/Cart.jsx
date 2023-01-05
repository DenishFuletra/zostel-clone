import CPolicy from "./CPolicy";
import Description from "./Description";
import HeadBox from "./HeadBox";
import Navbox from "./Navbox";
import Ppolicy from "./Ppolicy";
import Address from "./Address";
import { useState, useEffect } from "react";

export default function Cart() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://resisted-cubic-zydeco.glitch.me/booking/1`)
      .then((res) => res.json())
      .then((val) => {
        setdata(val);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
      <Navbox city={data.city} />
      <HeadBox />
      <Description city={data.city} />
      <Address />
      <Ppolicy />
      <CPolicy />
    </div>
  );
}
