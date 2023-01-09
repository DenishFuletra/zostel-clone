import "./App.css";
import Home from "../src/Component/Home/Home";
import Navbar from "../src/Component/Navbar/Navbar";
import RouteComponent from "./Component/Routes/Route";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <div className="App" >
      <Navbar />
      {/* <Home /> */}
      <RouteComponent />
      <Cart />



    </div>
  );
}

export default App;
