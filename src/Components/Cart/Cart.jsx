import CPolicy from "./CPolicy";
import Description from "./Description";
import HeadBox from "./HeadBox";
import Navbox from "./Navbox";
import Ppolicy from "./Ppolicy";
import Address from "./Address";
export default function Cart() {
  return (
    <div>
      <h1>Home</h1>
      <Navbox />
      <HeadBox />
      <Description />
      <Address />
      <Ppolicy />
      <CPolicy />
    </div>
  );
}
