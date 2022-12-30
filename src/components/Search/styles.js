import styled from "styled-components";

export const InputSearch = styled.input`
  border: 2px solid transparent;
  outline: none;
  caret-color: #C4C8CA;
  transition: .5s linear;
  letter-spacing: 1px;
  background: #535760;
  border-radius: 8px;
  height: 38px;
  padding: 1em;
  color: #C4C8CA;

  &:focus {
    border: 1px solid #C4C8CA;
    caret-color: #C4C8CA;
    color: #C4C8CA;
    /* box-shadow: 4px 4px 10px #070707; */
  }
  &::placeholder {
    color: #C4C8CA;
  }
`;

export const GridContainer = styled.div`
  max-width: 1080px;
  display: grid;
  margin: 2em auto;
`;
