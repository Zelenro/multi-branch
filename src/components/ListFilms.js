import { NavLink } from 'react-router-dom';

const ListFilms = ({ listMovies }) => {
  console.log(listMovies);

  return (
    <>
      <ul className="ImageGallery">
        {listMovies &&
          listMovies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListFilms;
