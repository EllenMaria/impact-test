import React, { useEffect, useRef } from "react";
import { useState } from "react";

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    if (url !== urlRef.current) {
      urlRef.current = url;
    }
  }, [url, options]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };
    fetchData();
  }, []);

  return [result, loading];
};

const Home = () => {
  const [id, setId] = useState("");
  const [result, loading] = useFetch("https://swapi.dev/api/people/" + id);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setId(id);
    console.log("ID", id);
  };

  if (!loading && result) {
    return (
      <div>
        {result &&
          result.results.map((character, index) => (
            <div key={index + 1} onClick={() => handleClick(index + 1)}>
              <p>
                {index + 1}
                {character.name}
              </p>
            </div>
          ))}
      </div>
    );
  }

  return <div>Home</div>;
};

export default Home;
