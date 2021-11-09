import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  font-size: 16px;
  padding: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;  
  padding: 5px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  margin: 8px 0;
  padding: 5px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  width: 100%;

  label {
    font-size: 12px;
    margin-left: 3px;
  }
`;