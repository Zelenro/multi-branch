import { NavLink, useLocation } from 'react-router-dom';

const GalleryFilms = ({ movies, query }) => {
  const location = useLocation();

  return (
    <>
      <ul className="ImageGallery">
        {movies.map(movie => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <NavLink
              to={`/movies/${movie.id}`}
              state={{ from: location, query }}
            >
              {/* <NavLink to={{ pathname: `/movies/${movie.id}`, state: { from: location, query } }}> */}
              {movie.title}
            </NavLink>
            <p>{movie.overview}</p>
            {!movie.poster_path && (
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`}
                alt={`No img poster movie ${movie.title}`}
                width={200}
              />
            )}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={200}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryFilms;
