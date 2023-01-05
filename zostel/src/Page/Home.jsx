
import NewYear from "../Section/NewYear";
import Northen from "../Section/Northen";
import Southern from "../Section/Southern";
import Weekend from "../Section/Weekend";
import Food from "../Section/Food";
import Nature from "../Section/Nature";
import OffBeat from "../Section/OffBeat";
import Destination from "../Section/Destination";
import Calender from "../Component/Calender";
import Award from "../Section/Award";
import Latest from "../Section/Latest";
import New from "../Section/New";
import OfferComponent from "../Component/OfferComponent";
import SliderComponent from "../Component/SliderComponent";

export default function Home() {

  return (
    <div style={{display:"flex", flexDirection:"column", margin:"auto",justifyContent:"center"}}>
      <SliderComponent />
      <Destination />
      <New />
      <OfferComponent />
      <NewYear />
      <Northen />
      <Southern />
      <Weekend />
      <Food />
      <Nature />
      <OffBeat />
      <Award />
      <Latest />
      



    </div>
  );
}