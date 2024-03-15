import { NavLink } from 'react-router-dom';

const GalleryFilms = ({ movies }) => {
  console.log(movies);

  return (
    <>
      <ul className="ImageGallery">
        {movies.map(movie => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryFilms;
