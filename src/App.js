// import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing";
import SomeProfs from "./components/SomeProfs";



function App() {
  console.log(window.Telegram.WebApp)

  console.log(window.Telegram.WebApp.colorScheme)
  return (
    <div className="App container ">
     <Landing />
     <SomeProfs />
    </div>
  );
}

export default App;
