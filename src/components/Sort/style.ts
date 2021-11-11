import styled from "styled-components";

export const ContentContainer = styled.div`
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  width: 100%;

  label {
    font-size: 12px;
    margin-left: 3px;
    color: #5AAB61;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
`;

export const StyledSelect = styled.select`
  min-width: 150px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #62BD69;
  outline: none;
`;

export const StyledInput = styled.input`
  width: 150px;
  font-size: 16px;  
  padding: 10px;
  border: 1px solid #62BD69;
  outline: none;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  font-size: 16px;
  margin: 0px 8px;
  padding: 10px;
  background-color: #62BD69;
  border: 1px solid #62BD69;
  color: #fff;
  cursor: pointer;
`;

export const StyledColumn = styled.div`
  width: 12px;
  height: 12px;

  &.current {
    border: 1px solid #111;
    background-color: #f28080;
    border-bottom: none;
    border-right: none;
    border-top: none;
  }

  &.value {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #249225;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }

  &.complete {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #c5e90b;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }

  &.not-value {
    background-color: #eeeeee;
  }
`;

export const StyledRow = styled.div`
  display: inline-block;
`;
