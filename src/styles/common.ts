import styled from 'styled-components';

export const StyledButton = styled.button`
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #62BD69;
  color: #62BD69;
  min-width: 150px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(98, 189, 105, 0.1);
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const HomeButton = styled.button`
  position: absolute;
  top: 50%;
  left: -240px;
  transform: translateY(-50%);
  outline: none;
  background-color: #fff;
  border: none;
  color: #111;
  text-align: center;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #62BD69;
  }
`;

export const ErrorMsg = styled.p`
  background-color: rgb(253, 237, 237);
  color: rgb(95, 33, 32);
  padding: 10px 30px;
  margin-bottom: 30px;
  opacity: 0;
  min-height: 40px;
  transition: opacity 0.3s;

  &.active {
    opacity: 1;
  }
`;