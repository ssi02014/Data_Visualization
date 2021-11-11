import React from "react";
import {
  HeaderContainer,
  StyledSelect,
  StyledInput,
  StyledButton,
  ColumnContainer,
} from "./style";

interface Props {
  length: number;
  isCancel: boolean;
  intervalTime: number;
  progress: boolean;
  isComplete: boolean;
  onError: (message: string) => void;
  onSelect: (e: any) => void;
  changeIntervalTime: (e: any) => void;
  changeLength: (e: any) => void;
  onInit: (e: any) => void;
  onCancel: (e: any) => void;
  iterator: (e: any) => void;
}
const Header = ({
  length,
  isCancel,
  intervalTime,
  isComplete,
  progress,
  onError,
  onSelect,
  changeIntervalTime,
  changeLength,
  onInit,
  onCancel,
  iterator,
}: Props) => {
  return (
    <HeaderContainer>
      <ColumnContainer>
        <label htmlFor="sort-select">정렬 종류</label>
        <StyledSelect name="sort-select" id="sort-select" onChange={onSelect}>
          <option value="bubble">버블 정렬</option>
          <option value="selection">선택 정렬</option>
          <option value="insertion">삽입 정렬</option>
          <option value="quick">퀵 정렬</option>
          <option value="merge">병합 정렬</option>
        </StyledSelect>
      </ColumnContainer>

      <ColumnContainer>
        <label htmlFor="interval-time">정렬 시간 (ms)</label>
        <StyledInput
          type="text"
          id="interval-time"
          value={intervalTime}
          onChange={changeIntervalTime}
        />
      </ColumnContainer>

      <ColumnContainer>
        <label htmlFor="list-count">배열 개수 (개)</label>
        <StyledInput type="text" id="list-count" value={length} onChange={changeLength} />
      </ColumnContainer>

      <StyledButton onClick={onInit}>배열 초기화</StyledButton>
        {progress ? (
          <StyledButton 
            style={{ backgroundColor: "gray", border: "1px solid gray" }} 
            onClick={onCancel}
          >
            정지
          </StyledButton>
        ) : (
          <StyledButton onClick={(e) => {
            if (!isComplete) iterator(e);
            else onError("정렬이 완료되었습니다.");
          }}>
            {isCancel ? "재시작" : "정렬"}
          </StyledButton>
        )}
    </HeaderContainer>
  );
};

export default Header;
