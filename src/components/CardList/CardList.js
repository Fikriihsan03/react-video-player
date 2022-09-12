import Card from "./Card";
// import data from "../../data/moviesData.json";
import { useEffect, useState } from "react";
const CardList = ({ search }) => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/movie?title=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [search]);
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
