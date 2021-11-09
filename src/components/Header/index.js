import React from "react";
import {
  HeaderContainer,
  StyledSelect,
  StyledInput,
  StyledButton,
} from "./style";

const Header = ({
  length,
  onSelect,
  intervalTime,
  changeIntervalTime,
  changeLength,
  onInit,
  onCancel,
  iterator,
}) => {
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
      <StyledButton onClick={iterator}>정렬</StyledButton>
      <StyledButton onClick={onCancel}>종료</StyledButton>
    </HeaderContainer>
  );
};

export default Header;
