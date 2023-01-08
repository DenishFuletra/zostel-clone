import "./App.css";
import Home from "../src/Component/Home/Home";
import Navbar from "../src/Component/Navbar/Navbar";
import RouteComponent from "./Component/Routes/Route";


export default function App() {

  return (
    <div className="App" >
      <Navbar />
      {/* <Home /> */}
      <RouteComponent />


    </div>
  );
}