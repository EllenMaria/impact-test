import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  height: 2em;
  line-height: 1.7;
  overflow: hidden;
  border-radius: 8px;
  width: 190px;

  &:after {
    content: "⌵";
    position: absolute;
    color: #C4C8CA;
    font-size: 1rem;
    top: 0;
    right: 0;
    padding: 0 .8em;
    background: transparent;
    cursor:pointer;
    pointer-events:none;
  }
`;

export const SelectInput = styled.select`
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  appearance:none;
  font-family: inherit;
  outline:0;
  box-shadow:none;
  border: 1px solid;
  border-color: ${(props) => props.cor};
  background: transparent;
  background-image: none;
  flex: 1;
  padding: .5em;
  color:#C4C8CA;
  cursor:pointer;
  font-size: .850rem;
  border-radius: 8px;
`;

export const Option = styled.option`
  background-color: #303236;
  border: 1px solid;
  border-color: ${(props) => props.cor};
  color: #C4C8CA;
  padding: 5em;
  font-size: .850rem;
  position: absolute;

  &:nth-child(1) {
    background-color: #201f1fc7;
    color: lightgray;
  }
  &:checked {
    content: "OK";
    color: #303236;
    background-color: ${(props) => props.checkedColor};
    position: relative;
    font-weight: 700;
  }
`;
