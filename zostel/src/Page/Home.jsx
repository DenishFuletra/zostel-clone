
import NewYear from "../Section/NewYear";
import Northen from "../Section/Northen";
import Southern from "../Section/Southern";
import Weekend from "../Section/Weekend";
import Food from "../Section/Food";
import Nature from "../Section/Nature";
import OffBeat from "../Section/OffBeat";
import Destination from "../Section/Destination";

export default function Home() {

  return (
    <div>
      <Destination/>
      <NewYear />
      <Northen />
      <Southern/>
      <Weekend />
      <Food/>
      <Nature/>
      <OffBeat/>
    </div>
  );
}