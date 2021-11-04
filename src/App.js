import { breakList } from "prelude-ls";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [basicValue, setBasicValue] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [sortType, setSortType] = useState("bubble");
  const [cursor, setCurosor] = useState(1);
  const [intervalTime, setIntervalTime] = useState(100);
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

  function* quickSort(a, l, r) {
    // a: array to sort, k: key to sort by,
    // l, r: optional array index array range

    // i: stack index, s: stack,
    // p: pivot index, v: pivot value,
    // t: temporary array item,
    // x, y: partion low/high

    var i, s, p, v, t, x, y;

    l = l || 0;
    r = r || a.length - 1;

    i = 2;
    s = [l, r];

    while (i > 0) {
      r = s[--i];
      l = s[--i];

      if (l < r) {
        // partition

        x = l;
        y = r - 1;

        p = l;
        v = a[p];
        a[p] = a[r];

        while (true) {
          while (x <= y && a[x] != undefined && a[x] < v) x++;
          while (x <= y && a[y] != undefined && a[y] >= v) y--;
          if (x > y) break;

          yield onSwap(a, x, y);
        }

        a[r] = a[x];
        a[x] = v;

        s[i++] = l;
        s[i++] = x - 1;
        s[i++] = x + 1;
        s[i++] = r;

        yield a;
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
        // iter = bubbleSort(value);
        iter = quickSort(value);
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

  const onInit = () => {
    const initList = createNumberList();
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
          {sortValue &&
            sortValue.map((el, idx) => {
              return (
                <p
                  key={idx}
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    width: "20px",
                    height: "20px",
                  }}
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
                        backgroundColor: "rgba(244, 0, 0, 0.3)",
                        opacity: 0.3,
                        // transform: "scale(1.3)",
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
              // else if (basicValue.indexOf(el) === sortValue.indexOf(el)) {
              //   if (i < el) {
              //     col.push(
              //       <div
              //         className="col"
              //         style={{
              //           width: "12px",
              //           height: "12px",
              //           backgroundColor: "yellow",
              //         }}
              //       >
              //         {" "}
              //       </div>
              //     );
              //   } else {
              //     col.push(
              //       <div
              //         className="col"
              //         style={{
              //           width: "12px",
              //           height: "12px",
              //           backgroundColor: "gray",
              //         }}
              //       >
              //         {" "}
              //       </div>
              //     );
              //   }
              // }
              else {
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
                {col.reverse().map((el) => el)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
