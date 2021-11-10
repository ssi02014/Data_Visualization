import React from "react";
import style from './App.module.css';
import Router from "./pages/router";

import "./App.css";

function App() {
  return (
    <div className={style.container}>
      <Router />
    </div>
  );
}

export default App;
