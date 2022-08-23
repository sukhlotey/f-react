import Navbar from './component/Navbar';
import Box from './component/Box';
import React, { useState } from 'react';
import Alert from './component/Alert';
import Extra from './component/Extra';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "black";
      document.title = "TextUtilts-Dark Mode";
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      document.title = "TextUtilts-Light Mode";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextApp" yes="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route path="/" element={<Box heading="Write here your text" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<Extra mode={mode} />} />           
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
