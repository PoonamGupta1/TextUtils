import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClass = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  const changeMode = (cls) => {
    console.log(cls);
    removeBodyClass();
    document.body.classList.add("bg-" + cls);
    if (cls === "light") {
      setMode("light");
    } else if(cls === "danger") {
      setMode("danger");
    } else if (cls === "success") {
      setMode("success");
    } else if (cls === "primary") {
      setMode("primary")
    } else if(cls === "dark") {
      setMode("dark");
    }
  };

  let height = {
    height: "40px",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          modeChange={changeMode}
        />
        <div className="container-fluid" style={height}>
          <Alerts alert={alert} />
        </div>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              path="/TextUtils-React"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
