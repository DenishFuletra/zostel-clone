//import "./App.css";
import Cart from "./Component/Cart/Cart";
import Navbar from "../src/Component/Navbar/Navbar";
import RouteComponent from "./Component/Routes/Route";
import Footer from "./Component/Footer/Footer";
import Payment from "./Component/PaymentGateway/Payment";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Payment />
      {/* <Home /> */}
      <RouteComponent />
      
      
    <Footer />
    </div>
  );
}

export default App;
