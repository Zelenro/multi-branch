import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { allAboutMovie } from '../../components/App/api';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

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
  const holdState = useRef(location.state);

  return (
    <>
      {movie && (
        <>
          <NavLink to={holdState.current.from}>Go back</NavLink>
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
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
