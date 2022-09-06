import Card from "./Card";
// import data from "../../data/moviesData.json";
import { useEffect, useState } from "react";
const CardList = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("http://localhost:3005/movie")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  });
  return (
    <>
      {movies?.map((_, i) => {
        // console.log(movies);
        return (
          <Card
            key={i}
            id={movies[i].id}
            title={movies[i].title}
            filename={movies[i].filename}
          />
        );
      })}
    </>
  );
};

export default CardList;
