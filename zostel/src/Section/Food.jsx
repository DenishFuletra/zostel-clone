import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Component/ResponsiveData";
import Card from "../Component/Card";
import { useState, useEffect } from "react";
import "./NewYear.css";


function Food() {
    let [data, setData] = useState([]);

    let fetchData = async () => {
        let responce = await fetch(`http://localhost:5000/food`);
        let data = await responce.json();
        // console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="newYear">
            <div style={{ marginTop: "15px" }}>
                <h1>Food <span style={{ color: "#f15824" }}>Mixtape</span></h1>
            </div>
            <div id="slider">
                <Carousel showDots={false}
                    responsive={responsive}
                    swipeable={true}
                    keyBoardControl={true}
                    draggable={true}
                    transitionDuration={1000}
                    renderArrowsWhenDisabled={false}
                >
                    {data.map(function (elem, i) {
                        return (
                            <Card
                                data={elem}
                                key={i}
                            />
                        )
                    })}

                </Carousel>
            </div>

        </div>
    );

}

export default Food;