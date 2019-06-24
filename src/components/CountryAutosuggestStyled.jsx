import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 200px;
  border: 1px solid black;
`;

export const ContainerStyled = styled.div`
  position: absolute;
  left: calc(50% - 100px);
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;

  ul {
    list-style: none;
    padding-left: 0;
    text-align: left;
  }
`;

export const SuggestionStyled = styled.div`
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #eee;
  }
`;
