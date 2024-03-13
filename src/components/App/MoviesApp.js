import { Route, Routes } from 'react-router-dom';
import { StyledLink } from './MoviesApp.styled';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import { useState } from 'react';
import { trendingMovies } from './api';
import { useEffect } from 'react';

const MoviesApp = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const data = await trendingMovies();
        setTrendMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      <h1>Movies APP </h1>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home trendMovies={trendMovies} />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MoviesApp;
