import styled from "styled-components";

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid yellow;
  border-top-color: transparent;
  animation: rot1 1.2s linear infinite;

@keyframes rot1 {
  to {
    transform: rotate(360deg);
  }
}
`;
