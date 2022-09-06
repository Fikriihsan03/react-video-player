import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import MoviePlayer from "./Layout/MoviePlayer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MoviePlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
