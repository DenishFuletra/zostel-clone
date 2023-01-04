export default function HeadBox() {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid red",
        width: "1200px",
        height: "500px",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          border: "2px solid blue",
          width: "950px",
          height: "500px",

          borderRadius: "10px",
        }}
      >
        <h1>main image</h1>
      </div>
      <div style={{ border: "2px solid green", width: "250px" }}>
        {" "}
        <div
          style={{
            border: "2px solid red",
            height: "150px",
          }}
        >
          <h1>image1</h1>
        </div>
        <div
          style={{
            border: "2px solid red",
            height: "150px",
          }}
        >
          <h1>image1</h1>
        </div>
        <div
          style={{
            border: "2px solid red",
            height: "150px",
          }}
        >
          <h1>image1</h1>
        </div>
        <div style={{ border: "2px solid pink", height: "30px" }}>
          <p>View More</p>
        </div>
      </div>
    </div>
  );
}
