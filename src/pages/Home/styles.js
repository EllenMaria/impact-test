import styled from "styled-components";
import { theme } from "../../styles/themes";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 260px));
  gap: 5em;
  place-content: center;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em 0;
  align-items: center;
  color: #C4C8CA;
`;

export const ClearButton = styled.button`
  background-color: ${theme.colors.primaryDarkColor};
  border: none;
  padding: .5em 1em;
  border-radius: 4px;
  color: inherit;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;
