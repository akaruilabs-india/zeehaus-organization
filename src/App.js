import logo from "./logo.svg";
import "./App.css";
import Homepage from "./ZeehausOrg/Homepage";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import DAOConsensus from "./ZeehausOrg/DAOConsensus";
import Nav from "./ZeehausOrg/Nav";
import Footer from "./ZeehausOrg/Footer";
import Refund from "./ZeehausOrg/Refund";
// import

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="dao" element={<DAOConsensus />} />
        <Route path="refund" element={<Refund />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
