import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
  margin-bottom: 30px;
`;

export const StyledSelect = styled.select`
  min-width: 120px;
  font-size: 16px;
  padding: 5px;
`;

export const StyledInput = styled.input`
  width: 120px;
  font-size: 16px;  
  padding: 5px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  font-size: 16px;
  margin: 0px 8px;
  padding: 5px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  width: 100%;

  label {
    font-size: 12px;
    margin-left: 3px;
  }
`;