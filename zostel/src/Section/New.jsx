import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Component/ResponsiveData";
import Card from "../Component/Card";
import { useState, useEffect } from "react";
import "./NewYear.css";
import NewCard from "../Component/NewCard";


function New() {
    let [data, setData] = useState([]);

    let fetchData = async () => {
        let responce = await fetch(`http://localhost:5000/new`);
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
                <h1>What's <span style={{ color: "#f15824" }}>New</span></h1>
            </div>
            <div id="slider">
                <Carousel showDots={false}
                    responsive={responsive}
                    swipeable={true}
                    keyBoardControl={true}
                    draggable={true}
                    transitionDuration={1000}>
                    {data.map(function (elem, i) {
                        return (
                            <NewCard
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

export default New;