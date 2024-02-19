import { KEY, URL } from '../globalParams';

export const page = '1';
export const perPage = '12';

export const getImages = async value => {
  const searchImages = value;
  console.log(searchImages);
  try {
    const response = await fetch(
      `${URL}?key=${KEY}&q=${searchImages}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
    );
    const data = await response.json();
    // console.log(data.hits);
    const arrayImg = data.hits;
    return arrayImg;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};
