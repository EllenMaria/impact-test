import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderCard = styled.header`
`;

export const SeeMoreButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: .75rem;
  text-transform: uppercase;
  cursor: pointer;
  transform: translate(-50%, 125%);
  width: 40%;
  border-radius: 1rem;
  border: none;
  background-color: #FFC500;
  color: #252629;
  padding: .5em;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  `;

export const CardContainer = styled(motion.div)`
    background-color: #252629;
    border: 1px solid white;
    cursor: pointer;
    width: 250px;
    padding: 1.5em 2em;
    box-shadow: 0px 4px 4px rgba(78, 78, 78, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    /* transition: 0.5s ease-out; */
    overflow: visible;

    &:hover {
      border-color: #FFC500;
      -webkit-box-shadow: 0px 0px 20px 1px #ffbb763f;
      box-shadow: 0px 0px 20px 1px #ffbb763f;
    }

    &:hover ${SeeMoreButton} {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  `;

export const CardBox = styled(motion.div)`
  min-height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardFilmsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardFilmsContainer = styled.div`
  text-align: start;
`;

export const SmallTitleDetail = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  font-size: .75rem;
`;

export const SmallTextDetail = styled.p`
  text-transform: capitalize;
  font-weight: 400;
  font-size: .75rem;
`;

export const CardFilms = styled.p`
  margin-top: 5px;
  margin-right: 5px;
  background-color: ${(props) => props.cor};
  font-size: .75rem;
  border-radius: 50px;
  padding: .2em .7em;
`;

export const CardTitle = styled.h2`
  color:#FFC500;
  font-weight: 700;
  text-align: center;
`;

export const InfoDetails = styled.div`
  display: flex;
  gap: 1em;
  text-align: center;
  place-content: center;
  margin-top: .8em;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all .5s ease-in-out;
  /* padding-bottom: ${(props) => (props.open ? "10px" : "")}; */
`;

export const MoreInfoDetails = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

export const MoreInfoBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #C4C8CA;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
