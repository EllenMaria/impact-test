import styled from "styled-components";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 230px));
    gap: 4rem;
    place-content: center;
`;

export const CardContainer = styled.div`
  position: relative;
  &:nth-child(odd)&:before {
    content: "";
    background-color: #00fffb4c;
    position: absolute;

    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
  }
  &:nth-child(even)&:before {
    content: "";
    background-color: #ff00004c;
    position: absolute;

    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
  }
`;

export const CardBox = styled.div`
    width: 11.875em;
    min-height: 15.875em;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.074);
    border: 1px solid rgba(255, 255, 255, 0.222);
    cursor: pointer;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: .7rem;
    -webkit-transition: all ease .3s;
    transition: all ease .3s;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    &:nth-child(odd)&:hover {
      -webkit-box-shadow: 0px 0px 20px 1px #ffbb763f;
      box-shadow: 0px 0px 20px 1px #ffbb763f;
  }
    &:nth-child(even)&:hover {
      -webkit-box-shadow: 0px 0px 20px 1px #000;
      box-shadow: 0px 0px 20px 1px #000 !important;
  }
`;

export const CardFilms = styled.p`
  font-size: .8em;
  font-weight: 300;
  letter-spacing: .1em;
`;

export const CardTitle = styled.span`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: .1em
`;
