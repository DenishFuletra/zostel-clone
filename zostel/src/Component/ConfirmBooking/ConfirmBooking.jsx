// import style from "../components/Footer/footer.module.css";
import style from "../ConfirmBooking/ConfirmBooking.module.css";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SummaryBox2 from "../Cart/SummaryBox2";

function ConfirmBooking() {
  let data = JSON.parse(localStorage.getItem("data"));
  function getDays() {
    let start = new Date(data.startDate);
    let start2 = data.startDate;
    let end = new Date(data.endDate);
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return { TotalDays, start2 };
  }
  const days = getDays();
  let start = new Date(data.startDate);
  const { countRoom } = useContext(ContextData);
  return (
    <div>
      <h1 id={style.heading}>Confirm your booking</h1>
      <div className={style.child}>
        <div>
          <form
            action=""
            style={{
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div className={style.head}>
              <div id={style.h2_guest1}>
                {" "}
                <h2>Guest Information</h2>
              </div>
            </div>

            <div className={style.name_div}>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter the first name" />
              <input placeholder="Enter your middle name" />
              <input placeholder="Enter your last name" />
              <br />
            </div>
            <div className={style.select_div}>
              <label style={{ paddingRight: "10px" }} htmlFor="">
                Gender
              </label>
              <select style={{ width: "78%" }} name="" id="">
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
              <br />
              <label style={{ paddingRight: "23px" }} htmlFor="">
                Email
              </label>
              <input
                style={{ width: "76%", marginRight: "0px" }}
                type="text"
                placeholder="Enter your email"
              />
              <br />

              <label style={{ paddingRight: "23px" }}>Phone</label>
              <input
                style={{ width: "76%", marginRight: "0px" }}
                type="number"
                placeholder="Enter your number"
              />

              <label style={{ paddingRight: "14px" }} htmlFor="">
                Address
              </label>
              <input
                style={{ width: "76%", marginRight: "10px" }}
                type="text"
                placeholder="Enter your address"
                className={style.address}
              />
            </div>
            <hr />
            <p>
              Not going solo? <span>Add other people details</span>
            </p>
          </form>
          <div className={style.property_div}>
            <div id={style.h2_guest}>
              {" "}
              <h2>Property Policy</h2>
            </div>
            <ul>
              <li>
                - Guests are required to pay a 100% advance at the time of
                booking itself.
              </li>
              <li>
                - We strictly DO NOT allow a group of more than 4 people.
                Further, if the group behaviour is deemed unfit at the property,
                the Zostel Property Manager, upon subjective evaluation, retains
                the full right to take required action which may also result in
                an on-spot cancellation without refunds.
              </li>
              <li>
                - Children below 18 years of age are not permitted entry/stay at
                any of our hostels, with or without guardians. We do not
                recommend families.
              </li>
              <li>
                - We only accept a government ID as valid identification proof.
                No local IDs shall be accepted at the time of check-in.
              </li>
              <li>
                - Guests are not permitted to bring outsiders inside the hostel
                campus.
              </li>
              <li>
                - We believe in self-help and do not provide luggage assistance
                or room services.
              </li>
              <li>
                - Drugs and any substance abuse is strictly banned inside and
                around the property.
              </li>
              <li>
                - Alcohol consumption is permitted at the premises as per
                property’s discretion and local laws. Please reach out to the
                property prior to your arrival to confirm the same.
              </li>
              <li>- Right to admission reserved. </li>
            </ul>
          </div>
          <div className={style.cancellation_div}>
            <div id={style.h2_guest}>
              {" "}
              <h2>Cancellation Policy</h2>
            </div>
            <ul>
              <li>
                - All booking requests will be confirmed at a 100% advance
                payment at the time of booking.
              </li>
              <li>
                - We will be providing full credits on any cancellations
                received more than 7 days prior to the arrival date. You will be
                able to avail the credited amount for any future booking at any
                of our properties.
              </li>
              <li>
                - If informed within 7 days of the standard check-in time (12
                pm), the entire amount shall be adjusted against the
                cancellation fee.
              </li>
              <li>
                - In case the property is not able to host you due to any local
                or subjective circumstances, we will provide you with a credit
                of the same amount. You will be able to avail the credited
                amount for any future booking at any of our properties.
              </li>
              <li>
                For any other queries, please reach out to us at
                reservations@zostel.com.
              </li>
            </ul>
          </div>
        </div>

        <div className={style.summary_div}>
          <h2>Summary</h2>
          <p id="datadays">
            <strong>{days.TotalDays} nights starting from</strong>
            <p>
              <DatePicker
                selected={start}
                selectsStart
                monthsShown={2}
                dateFormat="E dd MMMM,yyyy"
              />
            </p>
          </p>
          <SummaryBox2 />
        </div>
      </div>
    </div>
  );
}
export default ConfirmBooking;
