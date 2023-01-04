import "./DestinationCard.css"

function DestinationCard({ data }) {
    //    console.log(data.bharat.name,data.bharat.image);
    //console.log(data.index1.name);
    // console.log(data1);
    // console.log(data1.image)
    return (
        <div className="destionationContainer" >
            <div className="destinationCard">
                <img src={data.index0.image} alt="" />
                <div>
                    <h1 style={{ bottom: "335px" }}>{data.index0.name}</h1>
                </div>
            </div>

            <div className="destinationCard">
                <img src={data.index1.image} alt="" />
                <div>
                    <h1>{data.index1.name}</h1>
                </div>
            </div>
        </div>

    )
}

export default DestinationCard;

// {
//     "index0": {
//         "id": 55,
//         "name": "Ooty",
//         "image": "https://img.cdn.zostel.com/zostel/gallery/images/ao96ruidT_OPgx6ZdbKUmQ/nepal-20220912084243.jpg?h=400"
//     },
//     "index1": {
//         "id": 55,
//         "name": "Panchgani",
//         "image": "https://img.cdn.zostel.com/zostel/gallery/images/Qc8EQutIRdaCZ7DW68ya8A/the-meadows-hills-that-soothe-your-hearts-2_Yaumn8n.jpg?h=400"
//     }
// }