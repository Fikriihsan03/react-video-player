import CardList from "../components/CardList/CardList";

const Home = () => {
  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className="my-[2rem] font-bold text-3xl">List Film di Folder Ini</h1>
      <div className="grid grid-cols-3 gap-4">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
