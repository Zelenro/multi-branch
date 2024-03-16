import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { trendingMovies } from './api';
import { StyledLink } from './MoviesApp.styled';
import NotFound from '../../pages/NotFound/NotFound';
// import Home from '../../pages/Home/Home';
// import Movies from '../../pages/Movies/Movies';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../../pages/Home/Home'));
// const Cast = lazy(() => import('../../pages/Home/Home'));
// const Reviews = lazy(() => import('../../pages/Home/Home'));

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
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Suspense fallback={<div>LODING HOME...</div>}>
        <Routes>
          <Route path="/" element={<Home trendMovies={trendMovies} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MoviesApp;
