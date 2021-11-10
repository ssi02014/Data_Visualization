import React, { useState, useRef, useCallback } from "react";
import Form from "../../components/Sort/form";
import Visualization from "../../components/Sort/visualization";
import { Link } from "react-router-dom";
import { createNumberList } from "../../utill/common";
import {
  selectionSort,
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
} from "../../utill/sort";
import { HomeButton, HeaderContainer } from "../../styles/common";


const Sort = () => {
  const [value, setValue] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [sortType, setSortType] = useState("bubble");
  const [cursor, setCurosor] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [intervalTime, setIntervalTime] = useState(100);
  const [length, setLength] = useState(30);
  const [progress, setProgress] = useState(false);

  const cancelRef = useRef(false);

  const checkType = useCallback(() => {
    if (sortType === "bubble") return bubbleSort(value, setCurosor);
    else if (sortType === "selection") return selectionSort(value, setCurosor);
    else if (sortType === "insertion") return insertionSort(value, setCurosor);
    else if (sortType === "quick") return quickSort(value, setCurosor);
    else if (sortType === "merge") return mergeSort(value);
  }, [sortType, value]);

  const iterator = useCallback((e) => {
    e.preventDefault();

    const iter = checkType();
    cancelRef.current = false;

    setProgress(true);

    const interval = setInterval(() => {
      if (cancelRef.current || isComplete) {
        clearInterval(interval);
      } else {
        const { value } = iter.next();
        if (!value) {
          setProgress(false);
          setCurosor(null);
          setIsComplete(true);
          clearInterval(interval);
        } else {
          const item = [...value];
          setSortValue(item);
        }
      }
    }, intervalTime);
  }, [value, isComplete]);

  const onSelect = (e) => {
    setSortType(e.target.value);
  };

  const onCancel = useCallback(() => {
    setProgress(false);
    cancelRef.current = true;
  }, []);

  const onInit = useCallback(() => {
    const initList = createNumberList(length);

    if (progress) {
      alert("정렬중에는 배열 초기화가 불가능합니다.");
    } else {
      cancelRef.current = false;
      setCurosor(null);
      setIsComplete(false);
      setValue(initList);
      setSortValue(initList);
    }
  }, [length, progress]);

  return (
    <>
      <HeaderContainer>
        <Link to="/"><HomeButton>{"< Home"}</HomeButton></Link>
        <h1>주요 정렬 알고리즘 시각화</h1>
      </HeaderContainer>

      <Form
        length={length}
        intervalTime={intervalTime}
        isCancel={cancelRef.current}
        progress={progress}
        isComplete={isComplete}
        onInit={onInit}
        onSelect={onSelect}
        iterator={iterator}
        onCancel={onCancel}
        changeIntervalTime={(e) => setIntervalTime(+e.target.value)}
        changeLength={(e) => setLength(+e.target.value)}
      />
      <Visualization
        isComplete={isComplete}
        sortValue={sortValue}
        cursor={cursor}
      />
    </>
  );
}

export default Sort;
