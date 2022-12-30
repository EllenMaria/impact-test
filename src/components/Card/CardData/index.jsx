import { CardContainer, CardBox, CardTitle, CardFilms } from "../styles";
// import { useEffect, useContext } from "react";
// import { loadFilms } from "../../../contexts/DataProvider/actions";
import P from "prop-types";
// import { FilmsContext } from "../../../contexts/DataProvider/context";
import { useDataContext } from "../../../contexts";

const CardData = ({ character }) => {
  // const filmsContext = useContext(FilmsContext);
  // const { filmState, filmDispatch } = filmsContext;

  // useEffect(() => {
  //   loadFilms(filmDispatch).then((dispatch) => {
  //     if (isMounted.current) {
  //       dispatch();
  //     }
  //   });

  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [filmDispatch]);

  const { filmsData } = useDataContext();

  return (
    <CardContainer>
      <CardBox>
        <CardTitle>{character.name}</CardTitle>
        <p>{character.eye_color}</p>
        <div>
          {filmsData.map((film) =>
            character.films.includes(film.url) ? (
              <CardFilms key={film.episode_id}>{film.title}</CardFilms>
            ) : (
              ""
            ),
          )}
        </div>
      </CardBox>
    </CardContainer>
  );
};

CardData.propTypes = {
  films: P.any,
  character: P.object,
};

export default CardData;
