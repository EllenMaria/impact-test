import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme, light }) => css`
  color:${light ? theme.colors.darkColor : theme.colors.lightColor}
  `}
`;
