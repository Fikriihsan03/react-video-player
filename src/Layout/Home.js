import { useState } from "react";
import CardList from "../components/CardList/CardList";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className="my-[2rem] font-bold text-3xl">List Film</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full max-w-xs my-12"
      />
      <div className="grid grid-cols-5 gap-4">
        <CardList search={search} />
      </div>
    </div>
  );
};

export default Home;
