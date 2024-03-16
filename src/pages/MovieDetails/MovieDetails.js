import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useRef } from 'react';
import { allAboutMovie } from '../../components/App/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const detailsMovie = async () => {
      try {
        const data = await allAboutMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    detailsMovie();
  }, [movieId]);

  const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // useRef ^

  return (
    <>
      {movie && (
        <>
          <NavLink
            to={
              location && location.state && location.state.from
                ? location.state.from
                : '/'
            }
          >
            Go back
          </NavLink>
          {/* <NavLink to={backLinkLocationRef.current}>Go back</NavLink> */}
          {/* useRef ^ */}
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>
                <h6>{genre.name}</h6>
              </li>
            ))}
          </ul>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </>
      )}
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location.state?.from ?? '/' }}>
            {/* <NavLink to="cast" state={{ from: location.state }}> */}
            {/* useRef ^ */}
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location.state?.from ?? '/' }}>
            {/* <NavLink to="reviews" state={{ from: location.state }}> */}
            {/* useRef ^ */}
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
