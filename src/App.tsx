import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Auth from "./pages/auth";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>Hello</p>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/rated" element={<p>Hello</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
