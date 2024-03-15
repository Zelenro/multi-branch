import { Outlet, useSearchParams } from 'react-router-dom';
import { searchForMovies } from '../../components/App/api';
import { useEffect, useState } from 'react';
import GalleryFilms from '../../components/GalleryFilms';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const searchMovies = async e => {
    // e.preventDefault();
    try {
      const data = await searchForMovies(query);
      setMovies(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const searchQuery = async () => {
      try {
        const data = await searchForMovies(query);
        setMovies(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    searchQuery();
  }, []);

  const updateQueryString = event => {
    const nameMovie = event.target.value;
    nameMovie === '' ? setParams({}) : setParams({ query: nameMovie });
  };

  return (
    <>
      <h1>Movies</h1>
      {/* <form
        onSubmit={() => {
          searchMovies();
        }}
      > */}
      <input type="text" onChange={updateQueryString} value={query} required />
      <button
        onClick={() => {
          searchMovies();
        }}
      >
        Search
      </button>
      {/* </form> */}

      {movies && <GalleryFilms movies={movies} query={query} />}

      <Outlet />
    </>
  );
};

export default Movies;
