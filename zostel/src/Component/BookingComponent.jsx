import "./BookingComponent.css";
import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";

const options = [
    { value: 'alleppey', label: 'Alleppey' },
    { value: 'aurangabad', label: 'Aurangabad' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'banikhet', label: 'Banikhet' },
    { value: 'barot', label: 'Barot' },
    { value: 'chamba', label: 'Chamba' },
    { value: 'cheog', label: 'Cheog' },
    { value: 'chitkul', label: 'Chitkul' },
    { value: 'dharamkot', label: 'Dharamkot' },
    { value: 'dobhi', label: 'Dobhi' },
    { value: 'fagu', label: 'Fagu' },
    { value: 'gangtok', label: 'Gangtok' },
    { value: 'jaisalmer', label: 'Jaisalmer' },
    { value: 'kochi', label: 'Kochi' },
];
export default function BookingComponent() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div id="booking-container">
            <div id="booking-place">
                <h3 className="booking-place-hover">DESTINATION</h3>
                <h3 className="booking-place-hover">ZOSTEL</h3>
                <h3  className="booking-place-hover">ZOSTEL HOMES</h3>
                <h3 className="booking-place-hover">ZOSTEL PLUS</h3>
            </div>
            <div id="booking-time">
                <div id="booking-place-div">
                    <h5>SELECT YOUR DESTINATION</h5>
                    <div id="booking-select">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            placeholder={"eg. Manali, Jothpur, Jaipur, etc."}
                        />
                    </div>
                </div>
                <div id="booking-checkin-out">
                    <div className="booking-checkin">
                        <h5>CHECK IN</h5>
                        <div >
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                monthsShown={2}
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-right-long"></i>
                    </div>
                    <div className="booking-checkin">
                        <h5>CHECK OUT</h5>
                        <div>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                monthsShown={2}
                                closeOnScroll={true}
                            />
                        </div>
                    </div>
                </div>
                <div id="booking-button">
                    <button>Book Now</button>
                </div>
            </div>

        </div>

    )

}