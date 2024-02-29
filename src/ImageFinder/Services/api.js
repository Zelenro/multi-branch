import { KEY, URL } from '../globalParams';

export const getImages = async (value, page, perPage) => {
  const searchImages = value;

  try {
    const response = await fetch(
      `${URL}?key=${KEY}&q=${searchImages}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
    );
    if (await response.ok) {
      const data = await response.json();
      const arrayImg = data.hits;
      if (arrayImg.length === 0) {
        return null;
      }
      return arrayImg;
    }
    return Promise.reject(new Error(`No found image ${searchImages} in fetch`));
  } catch (error) {
    console.error('Error massage:', error);
    return error;
  }
};
