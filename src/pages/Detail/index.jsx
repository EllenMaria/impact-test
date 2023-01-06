import { useParams } from "react-router-dom";
import { useDataContext } from "../../contexts/CharactersProvider/CharactersProvider";
import { makeSlug } from "../../helpers/make-slug";
import { GoBack } from "../../components";

const DetailPage = () => {
  const { characters, filmsData, starshipsData, vehiclesData } =
    useDataContext();
  const params = useParams();

  const teste = characters.filter((item) =>
    makeSlug(item.name).includes(params.name) ? item : "",
  );

  return (
    <div>
      <GoBack />
      {teste.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <div>
            {filmsData.map((film) =>
              item.films.includes(film.url) ? (
                <p key={film.episode_id}>{film.title}</p>
              ) : (
                ""
              ),
            )}
          </div>
          <div>
            <br />
            <h4>STARSHIPS</h4>
            {item.starships.length > 0
              ? starshipsData.map((film, index) =>
                  item.starships.includes(film.url) ? (
                    <p key={index}>{film.name}</p>
                  ) : (
                    ""
                  ),
                )
              : "---"}
          </div>
          <div>
            <br />
            <h4>VEHICLES</h4>
            {item.vehicles.length > 0
              ? vehiclesData.map((film, index) =>
                  item.vehicles.includes(film.url) ? (
                    <p key={index}>{film.name}</p>
                  ) : (
                    ""
                  ),
                )
              : "---"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
