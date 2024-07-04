import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import AddProf  from "./components/AddProf";
import Browse from "./components/Browse";


function App() {
  return (
    <div className="App container d-flex flex-column justify-content-around  align-items-center">
      
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/add-prof' element={<AddProf/>} />
         <Route path='/browse' element={<Browse/>} />

       </Routes>

     
    </div>
  );
}

export default App;


// page-hierarchy-tree 
//   -App -home 
//        -browse-professors
//        -add-professors