import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Register from "./components/Register";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Profile from "./components/Profile";
import Result from "./components/Result";

function App() {
  const[userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      } else setUserName("");
      console.log(user);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={userName} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;
