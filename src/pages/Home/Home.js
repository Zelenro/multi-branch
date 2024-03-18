import { useEffect, useState } from 'react';
import { trendingMovies } from '../../components/App/api';
import ListFilms from '../../components/ListFilms';
import Loading from '../../components/Loader/Loader';
import { ErrorMessage } from 'formik';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setLoading(true);
        const data = await trendingMovies();
        setTrendMovies(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!error && !loading && <ListFilms listMovies={trendMovies} />}
    </>
  );
};

export default Home;
