import React from "react";
import {
  HeaderContainer,
  StyledSelect,
  StyledInput,
  StyledButton,
} from "./style";

interface Props {
  length: number;
  isCancel: boolean;
  intervalTime: number;
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
  onSelect,
  changeIntervalTime,
  changeLength,
  onInit,
  onCancel,
  iterator,
}: Props) => {
  return (
    <HeaderContainer>
      <StyledSelect name="sort-select" id="sort-select" onChange={onSelect}>
        <option value="bubble">버블 정렬</option>
        <option value="selection">선택 정렬</option>
        <option value="insertion">삽입 정렬</option>
        <option value="quick">퀵 정렬</option>
      </StyledSelect>
      <StyledInput
        type="text"
        value={intervalTime}
        onChange={changeIntervalTime}
      />
      <StyledInput type="text" value={length} onChange={changeLength} />
      <StyledButton onClick={onInit}>배열 생성</StyledButton>
      <StyledButton onClick={iterator}>
        {isCancel ? "재시작" : "정렬"}
      </StyledButton>
      <StyledButton onClick={onCancel}>정지</StyledButton>
    </HeaderContainer>
  );
};

export default Header;
