import React, { useState } from "react";
import Header from "./components/Header";
import Visualization from "./components/Visualization";
import { createNumberList } from "./utill/common";
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
} from "./utill/sort";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [sortType, setSortType] = useState("bubble");
  const [cursor, setCurosor] = useState(null);
  const [intervalTime, setIntervalTime] = useState(100);
  const [length, setLength] = useState(50);

  const iterator = (e) => {
    e.preventDefault();

    let iter;

    switch (sortType) {
      case "bubble":
        iter = bubbleSort(value, setCurosor);
        break;
      case "selection":
        iter = selectionSort(value, setCurosor);
        break;
      case "insertion":
        iter = insertionSort(value, setCurosor);
        break;
      case "quick":
        iter = quickSort(value, setCurosor);
        break;
      default:
        iter = bubbleSort(value, setCurosor);
    }

    const interval = setInterval(() => {
      const { value } = iter.next();
      if (!value) {
        setCurosor(null);
        clearInterval(interval);
      } else {
        const item = [...value];
        setSortValue(item);
      }
    }, intervalTime);
  };

  const sortSelect = (e) => {
    setSortType(e.target.value);
  };

  const onInit = () => {
    const initList = createNumberList(length);
    setValue(initList);
    setSortValue(initList);
  };

  return (
    <div className="App">
      <div
        className="content"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header
          length={length}
          intervalTime={intervalTime}
          onInit={onInit}
          iterator={iterator}
          sortSelect={sortSelect}
          changeIntervalTime={(e) => setIntervalTime(+e.target.value)}
          changeLength={(e) => setLength(+e.target.value)}
        />

        <div>
          <Visualization sortValue={sortValue} cursor={cursor} />
        </div>
      </div>
    </div>
  );
}

export default App;
