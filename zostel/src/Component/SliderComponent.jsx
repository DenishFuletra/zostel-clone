import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveforSlider } from "../Component/ResponsiveData";
import Card from "../Component/Card";
import { useState, useEffect } from "react";
import "./SliderComponent.css";


const images = [
    { url: "https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg" },
    { url: "https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg" },
    { url: "https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg" },
    { url: "https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg" },
    { url: "https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg" },
];

const SliderComponent = () => {
    return (
        <div id="slider-component">
            <Carousel showDots={false}
                responsive={responsiveforSlider}
                arrows={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1800}
                // swipeable={true}
                // keyBoardControl={true}
                // draggable={true}
                // transitionDuration={500}
                renderArrowsWhenDisabled={true}
            >
                <img src="https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg" alt="" />
                <img src="https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg" alt="" />
                <img src="https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg" alt="" />
                <img src="https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg" alt="" />
                <img src="https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg" alt="" />

            </Carousel>
        </div>
    )

}
export default SliderComponent;