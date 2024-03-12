const trendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVkMTM3MmRlZmViOWFhNWUzYzAxODNmMjU2ZDg0MyIsInN1YiI6IjY1MDNmZDMxZWEzN2UwMDBjNjM5MjI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SmB6MlBjJxS2gIXJcHY0SwBdlBrEi796ARPcmppDMtg',
    },
  };
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

export default trendingMovies;
