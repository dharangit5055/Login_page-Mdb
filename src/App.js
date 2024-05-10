import "./App.css";
import Home from "./home";
import UserLogin from "./login";
import UserSignUp from "./signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={UserLogin} />
          <Route path="/signup" Component={UserSignUp} />
          <Route path="/home" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
