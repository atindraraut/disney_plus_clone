import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/detail" exact element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
