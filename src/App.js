import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#213654";
      showAlert("Dark Mode Enabled", "success");
      // setInterval(() => {
      //   document.title = "Textutils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils";
      // }, 1500);
      // to pop up the title
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const router = createBrowserRouter([
    {
      path: "/textutils",
      element: (
        <>
          <Navbar
            title="TextFormat"
            about="About Textutils"
            mode={mode}
            changeMode={changeMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Textform
              heading="Enter the text below"
              mode={mode}
              showAlert={showAlert}
            />
          </div>
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar
            title="Textutils"
            about="About Textutils"
            mode={mode}
            changeMode={changeMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Home
              heading="Enter the text below"
              mode={mode}
              showAlert={showAlert}
            />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            title="Textutils"
            about="About Textutils"
            mode={mode}
            changeMode={changeMode}
          />
          <Alert alert={alert} /> <About mode={mode} />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <Navbar
        title="Textutils"
        about="About Textutils"
        mode={mode}
        changeMode={changeMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          heading="Enter the text below"
          mode={mode}
          showAlert={showAlert}
        />
      </div> */}
      {/* <Textform
          heading="Enter the text below"
          mode={mode}
          showAlert={showAlert}
        /> */}
      {/* <div className="container my-3"> */}
      <RouterProvider router={router} />

      {/* <About /> */}
      {/* </div> */}
    </>
  );
}

export default App;
