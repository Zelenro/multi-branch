import ListFilms from '../../components/ListFilms';

const Home = ({ trendMovies }) => {
  return (
    <>
      <h1>Home</h1>
      <ListFilms listMovies={trendMovies} />
    </>
  );
};

export default Home;
