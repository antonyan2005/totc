import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './Components/Header/NavBar';
import Home from './Components/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path='/'  element = {<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
