import {
  Form,
  NavLink,
  Outlet,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { searchForMovies } from '../../components/App/api';
// import MovieDetails from '../MovieDetails/MovieDetails';
// import { Formik } from 'formik';
// import { initialValues, validationSchema } from './MoviesSearchSchema';
// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';

const Movies = () => {
  const { movieId } = useParams();
  // const [params, setParams] = useSearchParams();
  // const id = params.get(':movieId');
  // console.log(movieId);
  // console.log(useParams());

  // useEffect(() => {
  //   const getTrendMovies = async () => {
  //     try {
  //       const data = await trendingMovies();
  //       setTrendMovies(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getTrendMovies();
  // }, []);

  const searchMovies = async () => {
    const data = await searchForMovies();
    console.log(data);
  };

  return (
    <>
      <h1>Movies</h1>
      <form
        onSubmit={() => {
          searchMovies();
        }}
      >
        <input type="text" required />
        <button type="submit">Search</button>
      </form>
      {/* <NavLink to={`/movies/${movieId}`}>Link</NavLink> */}
      {/* <MovieDetails /> */}
      {/* <Cast /> */}
      {/* <Reviews /> */}
      <Outlet />
    </>
  );
};

export default Movies;
