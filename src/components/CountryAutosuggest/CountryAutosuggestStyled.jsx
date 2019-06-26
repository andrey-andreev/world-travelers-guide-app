import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 240px;
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px 8px;
  border: 1px solid #ccc;
  border-bottom: 1px solid #333;

  &:hover {
    border-color: #333;
  }

  &:focus {
    outline-width: 3px;
  }
`;

export const ContainerStyled = styled.div`
  position: absolute;
  left: calc(50% - 120px);
  width: 240px;
  border-radius: 5px;
  background-color: white;
  border-radius: 0;
  box-shadow: 0px 0px 5px 0px #333;

  ul {
    border: 1px solid #ccc;
    list-style: none;
    padding-left: 0;
    text-align: left;
    margin: 0;
  }
`;

export const SuggestionStyled = styled.div`
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #eee;
  }
`;
