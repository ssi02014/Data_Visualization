import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 200px;
`;

export const StyledColumn = styled.div`
  width: 18px;
  height: 18px;

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
