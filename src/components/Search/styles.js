import styled from "styled-components";

export const InputSearch = styled.input`
  border: 2px solid transparent;
  outline: none;
  caret-color: #C4C8CA;
  letter-spacing: 1px;
  background: #535760;
  border-radius: 8px;
  height: 38px;
  padding-left: 2.5rem;
  color: #C4C8CA;
  width: 100%;

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
