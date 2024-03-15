import { NavLink, useLocation } from 'react-router-dom';

const ListFilms = ({ listMovies }) => {
  const location = useLocation();

  return (
    <>
      <ul className="ImageGallery">
        {listMovies &&
          listMovies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListFilms;
