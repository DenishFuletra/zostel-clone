import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveforLatest } from "../Component/ResponsiveData";
import Card from "../Component/Card";
import { useState, useEffect } from "react";
import AwardCard from "../Component/AwardCard";
import "./NewYear.css";
import LatestReadCard from "../Component/LatestReadCard";



function Latest() {
    let [data, setData] = useState([]);

    let fetchData = async () => {
        let responce = await fetch(`http://localhost:5000/latestReads`);
        let data = await responce.json();
        //console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="newYear" >
            <div style={{ marginTop: "15px" }}>
                <h1>Latest <span style={{ color: "#f15824" }}>Reads</span></h1>
            </div>
            <div id="slider">
                <Carousel showDots={false}
                    responsive={responsiveforLatest}
                    swipeable={true}
                    keyBoardControl={true}
                    draggable={true}
                    transitionDuration={1000}>
                    {data.map(function (elem, i) {
                        return (
                            <LatestReadCard
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

export default Latest;


