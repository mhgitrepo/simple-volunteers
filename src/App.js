import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/NotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Volunteers from './components/Volunteers/Volunteers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/volunteers' element = {<Volunteers/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
