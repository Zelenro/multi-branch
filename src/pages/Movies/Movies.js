import { Outlet, useSearchParams } from 'react-router-dom';
import { searchForMovies } from '../../components/App/api';
import { useState } from 'react';
import GalleryFilms from '../../components/GalleryFilms';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');

  // console.log(useSearchParams);

  const searchMovies = async e => {
    // e.preventDefault();
    try {
      const data = await searchForMovies(query);
      console.log(data);
      setMovies(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const searchMovies = async () => {
  //     try {
  //       const data = await searchForMovies(desiredMovie);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   searchMovies();
  // }, [desiredMovie]);

  return (
    <>
      <h1>Movies</h1>
      {/* <form
        onSubmit={() => {
          searchMovies();
        }}
      > */}
      <input
        type="text"
        onChange={event => setParams({ query: event.target.value })}
        value={query || ''}
        required
      />
      <button
        onClick={() => {
          searchMovies();
        }}
      >
        Search
      </button>
      {/* </form> */}

      {movies && <GalleryFilms movies={movies} />}

      <Outlet />
    </>
  );
};

export default Movies;
