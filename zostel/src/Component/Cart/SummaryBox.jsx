import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
export default function SummaryBox() {
  let data = JSON.parse(localStorage.getItem("data"));
  // const [startDate, setStartDate] = useState(new Date(data.startDate));
  let start = new Date(data.startDate);
  function getDays() {
    let start = new Date(data.startDate);
    let start2 = data.startDate;
    let end = new Date(data.endDate);
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return { TotalDays, start2 };
  }
  const days = getDays();
  console.log(days.start2);
  return (
    <div>
      <div>
        <h2>Summary</h2>
        <p id="datadays">
          <strong>{days.TotalDays} Nights starting from </strong>
          <p>
            <DatePicker
              selected={start}
              selectsStart
              monthsShown={2}
              dateFormat="E dd MMMM,yyyy"
            />
          </p>
        </p>

        <p>
          {""} <strong>4 Bed Mixed Dorm (Ensuite) x 2</strong> {""}
        </p>
        <div id="finalval2">
          <p>
            {"val"}1498 x {days.TotalDays} nights
          </p>
          <strong>{""} 11,984</strong>
        </div>
        <div id="tax22">
          <p>Tax</p>
          <p>{""}1438</p>
        </div>
        <div id="tax22">
          <p>Total(tax incl.)</p>
          <p>{""}13,422</p>
        </div>
        <div id="payvall">
          <p>Payable Now</p>
          <p>2,819</p>
        </div>
        <div id="bookbtn">
          <button id="booknow">
            <Link
              to={"/confirmbooking"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Book now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
