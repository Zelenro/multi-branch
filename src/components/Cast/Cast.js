import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../App/api';
import { useEffect, useState } from 'react';
import Loading from '../Loader/Loader';
import { ErrorMessage } from 'formik';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detailsMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieCredits(movieId);
        setCredits(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };
    detailsMovie();
  }, []);

  return (
    <>
      <h1>Cast</h1>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {credits && (
        <ul>
          {credits.map(credit => (
            <li key={credit.id}>
              <h4>{credit.name}</h4>
              <p>Character: {credit.character}</p>

              {credit.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
                  alt={credit.name}
                />
              )}

              {!credit.profile_path && (
                <img
                  src={`https://cdna.artstation.com/p/assets/images/images/028/617/064/large/alin-bolcas-r-1001.jpg?1594982671`}
                  alt={credit.name}
                  width={200}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
