import React from "react";
import "./Description.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Manlogo from "../Loader/Manlogo";
import { Roomimg10bed, Roomimg4bed, Roomimg6bed } from "./imagebox/Roomimg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import HotTubIcon from "@mui/icons-material/HotTub";
import WifiIcon from "@mui/icons-material/Wifi";
import WaterIcon from "@mui/icons-material/Water";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import LocalLaundryService from "@mui/icons-material/LocalLaundryService";
export default function Booking() {
  return (
    <div id="main">
      <div id="bookmain">
        <div id="bookroomdiv">
          <div id="bookhead">
            <div>
              <h1>Book Your Stay</h1>
              <p>Select from a range of beautiful rooms</p>
            </div>
            <div>
              <button style={{ display: "flex" }}>
                <strong style={{ fontSize: "15px" }}>INR</strong>{" "}
                <RiArrowDownSLine color="rgb(236, 68, 22)" fontSize="20px" />
              </button>
            </div>
            <div>Calender</div>
          </div>
          <div id="roombox">
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg4bed />
                </div>
                <div id="roomdetails">
                  <div id="roomname">
                    <h3>4 Bed Mixed Dorm(Ensuite)</h3>
                    <p>
                      <strong>₹749</strong>/night
                    </p>
                  </div>
                  <p
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
                  >
                    <PersonIcon /> x 1
                  </p>
                  <p>
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv">
                    <p>
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    <button id="selbed">Select Bed</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg6bed />
                </div>
                <div id="roomdetails">
                  <div id="roomname">
                    <h3>4 Bed Mixed Dorm(Ensuite)</h3>
                    <p>
                      <strong>₹749</strong>/night
                    </p>
                  </div>
                  <p
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
                  >
                    <PersonIcon /> x 1
                  </p>
                  <p>
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv">
                    <p>
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    <button id="selbed">Select Bed</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg10bed />
                </div>
                <div id="roomdetails">
                  <div id="roomname">
                    <h3>4 Bed Mixed Dorm(Ensuite)</h3>
                    <p>
                      <strong>₹749</strong>/night
                    </p>
                  </div>
                  <p
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
                  >
                    <PersonIcon /> x 1
                  </p>
                  <p>
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv">
                    <p>
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    <button id="selbed">Select Bed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="booksum">
          <h2>Summary</h2>
          <p>
            <strong>46 Nights</strong> starting from{" "}
            <strong>Wed 11 Jan, 2023</strong>
          </p>
          <Manlogo />
        </div>
      </div>
    </div>
  );
}
