const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMTM3MmRlZmViOWFhNWUzYzAxODNmMjU2ZDg0MyIsInN1YiI6IjY1MDNmZDMxZWEzN2UwMDBjNjM5MjI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SmB6MlBjJxS2gIXJcHY0SwBdlBrEi796ARPcmppDMtg',
  },
};

const trendingMovies = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    const arrayTrendMovies = data.results;
    // console.log(arrayTrendMovies);
    return arrayTrendMovies;
  } catch (error) {
    console.error(error);
  }
};

const allAboutMovie = async id => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    const detailsMovie = data;
    // console.log(data);
    return detailsMovie;
  } catch (error) {
    console.error(error);
  }
};

const searchForMovies = async query => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    const detailsMovie = data.results;
    console.log(detailsMovie);
    return detailsMovie;
  } catch (error) {
    console.error(error);
  }
};

const getMovieCredits = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    const detailsMovie = data.cast;
    // console.log(detailsMovie);
    return detailsMovie;
  } catch (error) {
    console.error(error);
  }
};
const getMovieReviews = async id => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    const detailsMovie = data.results;
    // console.log(detailsMovie);
    return detailsMovie;
  } catch (error) {
    console.error(error);
  }
};

export { trendingMovies };
export { allAboutMovie };
export { searchForMovies };
export { getMovieCredits };
export { getMovieReviews };
