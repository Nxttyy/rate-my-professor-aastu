// import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing";
import SomeProfs from "./components/SomeProfs";
import AddNBrowse from "./components/AddNBrowse"


function App() {
  console.log(window.Telegram.WebApp)

  console.log(window.Telegram.WebApp.colorScheme)
  return ( <div className = "App container d-flex flex-column justify-content-around  align-items-center" >
    <Landing / >
    <AddNBrowse />
    </div>
  );
}

export default App;