import CPolicy from "./CPolicy";
import Description from "./Description";
import HeadBox from "./HeadBox";
import Navbox from "./Navbox";
import Ppolicy from "./Ppolicy";
import Address from "./Address";
import { useState, useEffect } from "react";
import { getLocationData } from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Booking from "./Booking";
export default function Cart() {
  const data = useSelector((state) => state.locationReducer.locationdata);
  const [place, setplace] = useState("Banglore");
  const isLoad = useSelector((state) => state.locationReducer.locationLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationData(place));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {isLoad ? (
        <Loader />
      ) : (
        <div>
          <Navbox />
          <HeadBox />
          <Description />
          <Booking />
          <Address />
          <Ppolicy />
          <CPolicy />
        </div>
      )}
    </div>
  );
}
