import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <Link to="/movies/:movieId">to Details </Link>
      <Outlet />
    </>
  );
};

export default Movies;
