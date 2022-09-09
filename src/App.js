import Home from './components/Home'
import './App.css';
import { HashRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Dellme_Restaurant from './components/Dellme_Restaurant';
import Dan_Jelly_Restaurant from './components/Dan_Jelly_Restaurant';
import Cart_MUI from './components/Cart_MUI';
import Navbar1 from './components/Navbar1';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';



function App() {
  return (
    <div className="App">
      <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dellme" element={<Dellme_Restaurant />} />
          <Route path="/danjelly" element={<Dan_Jelly_Restaurant />} />
          <Route path="/cart" element={<Cart_MUI />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
    </div>
  );
}

export default App;