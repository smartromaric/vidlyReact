import logo from './logo.svg';
import './App.css';
import { Route,Routes,Navigate } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <>
      {/* <Movies/> */}
      <NavBar/>
      <Routes>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/rentals' Component={Rentals}/>
        <Route path="/not-found" Component={NotFound}/>
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/" exact element={<Navigate to ="/movies" />} />
        <Route path='movies/:id' element={<MovieForm/>} />
        
      </Routes>
    </>
  );
}

export default App;
