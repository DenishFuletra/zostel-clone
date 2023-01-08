import React from "react";

export default function SummaryBox() {
  return (
    <div>
      <div>
        <p>
          {""} <strong>4 Bed Mixed Dorm (Ensuite) x 2</strong> {""}
        </p>
        <div id="finalval">
          <p>{"val"}1498 x 8 nights</p>
          <strong>{""} 11,984</strong>
        </div>
        <div id="tax">
          <p>Tax</p>
          <p>{""}1438</p>
        </div>
        <div id="tax2">
          <p>Total(tax incl.)</p>
          <p>{""}13,422</p>
        </div>
        <div id="payval">
          <p>Payable Now</p>
          <p>2,819</p>
        </div>
        <div id="bookbtn">
          <button id="booknow">Book now</button>
        </div>
      </div>
    </div>
  );
}
