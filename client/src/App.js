import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homescreen from "./pages/Homescreen";
import Bookingscreen from "./pages/Bookingscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;