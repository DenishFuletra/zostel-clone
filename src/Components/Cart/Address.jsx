import React from "react";
import "./Description.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdMap } from "react-icons/md";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
export default function Address() {
  const [box, setbox] = useState(false);
  return (
    <div
      style={
        box
          ? {
              width: "1200px",
              margin: "auto",
              height: "700px",
              transition: "2s",
            }
          : { width: "1200px", margin: "auto" }
      }
    >
      <h2 id="name">Locate Us</h2>
      <div
        style={{ border: "2px solid red", height: "300px", display: "flex" }}
      >
        <div
          id="address"
          style={{ border: "2px solid red", width: "400px", height: "300px" }}
        >
          <h4>Address:</h4>
          <p style={{ marginTop: "-15px" }}>
            {""}
            Beach Road, Near Vijay Beach Park, Sea View Ward, Padinjare
            Kurisadi, Kanjiramchira, Alappuzha, Kerala
          </p>

          <h5 style={{ marginTop: "-10px" }}>Contact:{""}0440114576</h5>
          <div id="ws">
            <BsWhatsapp size="20px" /> <p> Whatsapp us</p>
          </div>
          <div id="direction">
            <p>Directions</p>
            <button
              id="maxmin"
              onClick={() => {
                {
                  box ? setbox(false) : setbox(true);
                }
              }}
            >
              {box ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          </div>
          <div style={box ? { display: "grid" } : { display: "none" }}>
            <p>
              Ask for Vijay Amusement part. Walk North on Beach Road for 500
              meters, and you’ll reach a junction. On the opposite right corner,
              you will find Zostel Alleppey.
            </p>
            <p>
              <strong>From the Alleppey Railway Station:</strong> 2.5 km; ~INR
              85 for a tuk-tuk to Zostel Alleppey.
            </p>
            <p>
              <strong>From the Bus Stand Jetty:</strong> 4 km; ~INR 100 for a
              tuk-tuk to Zostel Alleppey.
            </p>
            <p>
              <strong>From Kochi Airport:</strong>
              85 km, 2 hrs; ~INR 2500 for a cab to Zostel Alleppey.
            </p>
          </div>
          <div id="getDirection">
            <MdMap size="20px"></MdMap>
            <p>Get directions</p>
          </div>
        </div>
        <div
          id="map"
          style={{ border: "2px solid red", height: "300px", width: "800px" }}
        >
          <iframe
            style={{ width: "800px", height: "300px", borderRadius: "10px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62961.39989537365!2d76.30708641222128!3d9.501119612354616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884f1aa296b61%3A0xb84764552c41f85a!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1672924299989!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
