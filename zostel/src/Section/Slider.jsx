import SliderComponent from "../Component/SliderComponent";
import BookingComponent from "../Component/BookingComponent";
import "./Slider.css";

export default function Slider() {
    return (
        <div id="slider-top">
            <SliderComponent />
            <div id="booking-top">
                <BookingComponent />
            </div>
        </div>
    )
}