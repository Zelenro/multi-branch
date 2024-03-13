import { NavLink } from 'react-router-dom';

const Home = ({ trendMovies }) => {
  console.log(trendMovies);

  return (
    <>
      <h1>Home</h1>
      <ul className="ImageGallery">
        {trendMovies &&
          trendMovies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
