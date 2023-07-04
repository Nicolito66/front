import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginComponent} from "./component/Login.component";
import {RegisterComponent} from "./component/Register.component";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<LoginComponent/>}/>
            <Route path="/login" element={<LoginComponent/>} />
            <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
  );
}

// function App() {
//     return (
//         <ResponsiveAppBar></ResponsiveAppBar>
//     );
// }

export default App;
