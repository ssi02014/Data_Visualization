import React, { useState, useRef, useMemo, useCallback } from "react";
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
  const [isComplete, setIsComplete] = useState(false);
  const [intervalTime, setIntervalTime] = useState(100);
  const [length, setLength] = useState(30);

  const cancelRef = useRef(false);

  const checkType = useCallback(() => {
    if (sortType === "bubble") return bubbleSort(value, setCurosor);
    else if (sortType === "selection") return selectionSort(value, setCurosor);
    else if (sortType === "insertion") return insertionSort(value, setCurosor);
    else if (sortType === "quick") return quickSort(value, setCurosor);
  }, [sortType, value]);

  const iterator = (e) => {
    e.preventDefault();

    let iter = checkType();
    cancelRef.current = false;

    const interval = setInterval(() => {
      const { value } = iter.next();

      if (cancelRef.current) {
        clearInterval(interval);
      }

      if (!value) {
        setCurosor(null);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        const item = [...value];
        setSortValue(item);
      }
    }, intervalTime);
  };

  const onSelect = (e) => {
    setSortType(e.target.value);
  };

  const onInit = () => {
    const initList = createNumberList(length);
    cancelRef.current = false;
    setCurosor(null);
    setIsComplete(false);
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
          onSelect={onSelect}
          onCancel={() => {
            cancelRef.current = true;
          }}
          changeIntervalTime={(e) => setIntervalTime(+e.target.value)}
          changeLength={(e) => setLength(+e.target.value)}
        />

        <Visualization
          isComplete={isComplete}
          sortValue={sortValue}
          cursor={cursor}
        />
      </div>
    </div>
  );
}

export default App;
