import './App.css';
// IMPORT REACT ROUTER
import { Routes, Route } from 'react-router-dom';
// IMPORT COMPONENTS
import Header from './Components/Header';

// IMPORT CONTAINER
import Home from './Container/Home/Home';
import MovieDetail from './Container/Movie/MovieDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
