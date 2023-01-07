import {
  CardContainer,
  CardBox,
  CardTitle,
  CardFilms,
  InfoDetails,
  HeaderCard,
  CardFilmsContainer,
  SmallTextDetail,
  SmallTitleDetail,
  MoreInfoDetails,
  MoreInfoBox,
  CardFilmsBox,
  SeeMoreButton,
} from "./styles";

import P from "prop-types";
import { useDataContext } from "../../contexts";
import { Link } from "react-router-dom";
import { makeSlug } from "../../helpers/make-slug";
import { useCallback, useState } from "react";

const filmColor = (episode) => {
  if (episode === 1) return "#91d6a59c";
  if (episode === 2) return "#e7909083";
  if (episode === 3) return "#7bc8ee93";
  if (episode === 4) return "#95935D";
  if (episode === 5) return "#b688d29d";
  if (episode === 6) return "#eb93d787";
  if (episode === 7) return "#a287628d";
};

export const Card = ({ character }) => {
  const { filmsData, speciesData } = useDataContext();
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfo = useCallback(
    (e) => {
      e.preventDefault();
      setShowMoreInfo(!showMoreInfo);
    },
    [showMoreInfo],
  );

  return (
    <CardContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={handleMoreInfo}
    >
      <CardBox layout>
        <HeaderCard>
          <CardTitle>{character.name}</CardTitle>
          <InfoDetails open={true}>
            <div>
              <SmallTitleDetail>GENDER</SmallTitleDetail>
              <SmallTextDetail>{character.gender}</SmallTextDetail>
            </div>
            <div>
              <SmallTitleDetail>BIRTHYEAR</SmallTitleDetail>
              <SmallTextDetail>{character.birth_year}</SmallTextDetail>
            </div>
            <div>
              <SmallTitleDetail>SPECIES</SmallTitleDetail>
              <SmallTextDetail>
                {character.species.length > 0
                  ? speciesData.map((specie) =>
                      character.species.includes(specie.url) ? (
                        <p key={specie.url}>{specie.name}</p>
                      ) : (
                        ""
                      ),
                    )
                  : "-"}
              </SmallTextDetail>
            </div>
          </InfoDetails>
        </HeaderCard>
        <MoreInfoDetails>
          <MoreInfoBox>
            <SmallTitleDetail>HEIGHT</SmallTitleDetail>
            <p>{character.height}</p>
          </MoreInfoBox>
          <MoreInfoBox>
            <SmallTitleDetail>MASS</SmallTitleDetail>
            <p>{character.mass}</p>
          </MoreInfoBox>
        </MoreInfoDetails>
        <InfoDetails open={showMoreInfo}>
          <div>
            <SmallTitleDetail>SKIN</SmallTitleDetail>
            <SmallTextDetail>{character.skin_color}</SmallTextDetail>
          </div>
          <div>
            <SmallTitleDetail>HAIR</SmallTitleDetail>
            <SmallTextDetail>{character.hair_color}</SmallTextDetail>
          </div>
          <div>
            <SmallTitleDetail>EYE</SmallTitleDetail>
            <SmallTextDetail>{character.eye_color}</SmallTextDetail>
          </div>
        </InfoDetails>
        <CardFilmsContainer>
          <SmallTitleDetail>Films</SmallTitleDetail>
          <CardFilmsBox>
            {filmsData.map((film) =>
              character.films.includes(film.url) ? (
                <CardFilms
                  cor={filmColor(film.episode_id)}
                  key={film.episode_id}
                >
                  {film.title}
                </CardFilms>
              ) : (
                ""
              ),
            )}
          </CardFilmsBox>
        </CardFilmsContainer>
      </CardBox>
      <Link to={`character/${makeSlug(character.name)}`}>
        <SeeMoreButton>More Info ►</SeeMoreButton>
      </Link>
    </CardContainer>
  );
};

Card.propTypes = {
  films: P.any,
  character: P.object,
  query: P.string,
};
