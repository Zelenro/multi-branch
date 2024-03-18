import { useSearchParams } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { searchForMovies } from '../../components/App/api';
import Loading from '../../components/Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const GalleryFilms = lazy(() => import('../../components/GalleryFilms'));
// import { ErrorMessage } from 'formik';
// const [allResult, setTotalResult] = useState(null);

const Movies = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  console.log(movies.length);

  // const [page, setPage] = useState(1);
  const [allPages, setTotalPages] = useState(null);

  const [params, setParams] = useSearchParams();
  const queryPage = Number(params.get('page')) ?? 1;
  const query = params.get('query') ?? '';

  const handleKeyPress = eve => {
    if (eve.key === 'Enter') {
      searchMovies(query);
    }
  };

  const searchMovies = async (query, page = 1) => {
    try {
      if (!query) {
        return;
      }
      setLoading(true);
      console.log('searchMovies :', query, page);

      const data = await searchForMovies(query, page);
      const arrayMovies = data.results;
      setMovies(prevState => [...prevState, ...arrayMovies]);

      const requestPage = data.page;
      const totalPages = data.total_pages;
      // setPage(requestPage);
      setTotalPages(totalPages);

      console.log('searchMovies after :', requestPage, totalPages);

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const searchQuery = async () => {
      try {
        if (!query || queryPage === '') {
          return;
        }
        setLoading(true);

        console.log('effect :', 'query :', query, 'page :', queryPage);

        const page = queryPage === 0 ? 1 : queryPage;
        const data = await searchForMovies(query, page);
        const arrayMovies = data.results;
        // const requestPage = data.page;
        const totalPages = data.total_pages;
        // console.log(arrayMovies.length, requestPage, totalPages);
        setMovies(arrayMovies);
        setTotalPages(totalPages);
        setLoading(false);
        console.log(Date.now());
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    searchQuery();
  }, []);

  const updateQueryString = event => {
    const nameMovie = event.target.value;
    const page = queryPage;
    console.log('updateQueryString', page, nameMovie);
    nameMovie === ''
      ? setParams({})
      : setParams({ query: nameMovie, page: page });
  };

  const loadMore = () => {
    if (queryPage < allPages) {
      const page = queryPage + 1;
      console.log('loadMore', queryPage, allPages, query, page);
      setParams({ query: query, page: page });
      searchMovies(query, page);
      console.log(movies);
      return movies;
    }
    console.log('ERROR LOAD MORE');
    return;
  };

  return (
    <>
      <h1>Movies</h1>
      <input
        type="text"
        onChange={updateQueryString}
        onKeyDown={handleKeyPress}
        value={query}
        required
      />
      <button
        onClick={() => {
          searchMovies();
        }}
      >
        Search
      </button>

      <Suspense fallback={<Loading />}>
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={loadMore}
          hasMore={movies.length !== allPages}
          loader={<Loading />}
          scrollThreshold={1.0}
          inverse={false}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={searchMovies}
          pullDownToRefresh
          pullDownToRefreshThreshold={20}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {loading && <Loading />}
          {error && <div>Error occurred</div>}
          {!error && !loading && movies && (
            <GalleryFilms movies={movies} query={query} />
          )}
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default Movies;
