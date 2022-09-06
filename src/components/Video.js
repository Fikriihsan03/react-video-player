import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Video = () => {
  let params = useParams();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    console.log(params.id);
    fetch(`http://localhost:3005/movie/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, [params.id]);
  return (
    <>
      {movieData.length > 0 ? (
        <div className="player-wrapper">
          {console.log(movieData[0].filename)}
          <ReactPlayer
            className="react-player "
            url={`http://localhost:3005/video/${movieData[0].filename}`}
            width="100%"
            height="70%"
            controls={true}
          />
          <h1 className="text-2xl py-12">Title : {movieData[0].title}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Video;
