import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../App/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(reviews);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* <h1>Reviews</h1> */}
      {reviews && (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <h4>{el.author}:</h4>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews ||
        (reviews.length === 0 && (
          <h3>We don`t have any reviews for this movie</h3>
        ))}
    </>
  );
};

export default Reviews;
