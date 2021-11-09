import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  min-width: 150px;
  min-height: 30px;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  min-width: 150px;
  min-height: 30px;
  font-size: 16px;
  margin-left: 10px;

  &:last-of-type {
    margin-right: 10px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 30px;
  font-size: 16px;
  margin-right: 10px;
`;
