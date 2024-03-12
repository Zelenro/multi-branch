// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';

import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <h1>MovieDetails</h1>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />

      {/* <Cast /> */}
      {/* <Reviews /> */}
    </>
  );
};

export default MovieDetails;
