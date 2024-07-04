import AddNBrowse from "./home/AddNBrowse";
import Landing from "./home/Landing";

function Home() {
  return (
    <div className="App container d-flex flex-column justify-content-around  align-items-center">
      <Landing />
      <AddNBrowse />
    </div>
  );
}

export default Home;
