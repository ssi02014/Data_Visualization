import { breakList } from "prelude-ls";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [basicValue, setBasicValue] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [sortType, setSortType] = useState("bubble");
  const [cursor, setCurosor] = useState(1);
  const [intervalTime, setIntervalTime] = useState(300);
  const [length, setLength] = useState(50);

  const createNumberList = () => {
    const randomList = [];
    const basicList = [];

    for (let i = 1; i <= length; i++) {
      basicList.push(i);
    }

    while (randomList.length < length) {
      let randomNum = Math.floor(Math.random() * length + 1);
      if (!randomList.includes(randomNum)) randomList.push(randomNum);
    }

    setBasicValue(basicList);
    return randomList;
  };

  const onSwap = (arr, x, y) => {
    const swap = arr[x];
    arr[x] = arr[y];
    arr[y] = swap;
    return arr;
  };

  function* bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          setCurosor(array[j]);
          yield onSwap(array, j, j + 1);
        }
      }
    }
    return array;
  }

  function* selectionSort() {
    let values = [...value];

    for (let i = 0; i < values.length; i++) {
      let temp = i;

      for (let j = i + 1; j < values.length; j++) {
        if (values[temp] > values[j]) temp = j;
      }

      if (temp !== i) {
        yield onSwap(values, temp, i);
      }
    }
  }

  function* insertionSort(arr) {
    let length = arr.length;

    for (let i = 1; i < length; i++) {
      let index = i;

      while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
        yield onSwap(arr, index, index - 1);
        index--;
      }
    }
  }

  const iterator = (e) => {
    e.preventDefault();

    let iter;

    switch (sortType) {
      case "bubble":
        iter = bubbleSort(value);
        break;
      case "selection":
        iter = selectionSort();
        break;
      case "insertion":
        iter = insertionSort(value);
        break;
      default:
        iter = bubbleSort(value);
    }

    const interval = setInterval(() => {
      const { value } = iter.next();
      if (!value) {
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

  return (
    <div className="App">
      <div
        className="content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <select name="sort-select" id="sort-select" onChange={sortSelect}>
            <option value="bubble">버블 정렬</option>
            <option value="selection">선택 정렬</option>
            <option value="insertion">삽입 정렬</option>
          </select>
          <input
            type="text"
            value={intervalTime}
            onChange={(e) => setIntervalTime(+e.target.value)}
          />
          <input
            type="text"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
          />
          <button
            onClick={() => {
              const initList = createNumberList();
              setValue(initList);
              setSortValue(initList);
            }}
          >
            배열 생성
          </button>
          <button onClick={iterator}>정렬</button>
        </div>

        <div>
          {sortValue &&
            sortValue.map((el, idx) => {
              return (
                <p
                  key={idx}
                  style={{ display: "inline-block", margin: "0 2px" }}
                >
                  {el}
                </p>
              );
            })}
        </div>

        <div>
          {sortValue.map((el, idx) => {
            let col = [];
            for (let i = 0; i < sortValue.length; i++) {
              if (cursor === el) {
                if (i < cursor) {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "red",
                        transform: "scale(1.3)",
                      }}
                    >
                      {""}
                    </div>
                  );
                } else {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "gray",
                      }}
                    >
                      {" "}
                    </div>
                  );
                }
              } else if (basicValue.indexOf(el) === sortValue.indexOf(el)) {
                if (i < el) {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "yellow",
                      }}
                    >
                      {" "}
                    </div>
                  );
                } else {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "gray",
                      }}
                    >
                      {" "}
                    </div>
                  );
                }
              } else {
                if (i < el) {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "green",
                      }}
                    >
                      {""}
                    </div>
                  );
                } else {
                  col.push(
                    <div
                      className="col"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "gray",
                      }}
                    >
                      {" "}
                    </div>
                  );
                }
              }
            }
            return (
              <div className="row" style={{ display: "inline-block" }}>
                {col.map((el) => el)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
