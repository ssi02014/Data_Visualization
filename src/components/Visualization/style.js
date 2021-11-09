import styled from "styled-components";

export const StyledColumn = styled.div`
  width: 12px;
  height: 12px;

  &.current {
    background-color: rgba(244, 0, 0, 0.3);
    opacity: 0.3;
  }

  &.value {
    background-color: green;
  }

  &.not-value {
    background-color: gray;
  }
`;

export const StyledRow = styled.div`
  display: inline-block;
`;
