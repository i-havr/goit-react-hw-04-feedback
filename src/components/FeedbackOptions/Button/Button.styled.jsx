import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid;
  border-radius: 5px;
  background-color: #07c;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #05a;
  }

  :active {
    background-color: orange;
  }
`;
