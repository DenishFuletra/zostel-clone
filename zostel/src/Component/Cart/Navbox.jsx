import { useSelector } from "react-redux";
export default function Navbox() {
  const cityname = useSelector(
    (state) => state.locationReducer.locationdata.city
  );
  return (
    <div>
      <h4>
        Home - Destination - {cityname} - Zostel {cityname}
      </h4>
    </div>
  );
}
