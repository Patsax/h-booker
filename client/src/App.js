import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import Homescreen from "./pages/Homescreen";
import Navbar from "./components/Navbar";
import Loginscreen from "./pages/Loginscreen";
import Registerscreen from "./pages/Registerscreen";
import Bookingscreen from "./pages/Bookingscreen";
import Profilescreen from "./pages/Profilescreen";
import Landingscreen from "./pages/Landingscreen";
import Adminscreen from "./pages/Adminscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Landingscreen />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin" element={<Adminscreen />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;