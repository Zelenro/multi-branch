import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images &&
          images.map(image => (
            <ImageGalleryItem key={nanoid()} image={image} />
          ))}
      </ul>
      <ButtonLoadMore onClick={onClick} />
    </>
  );
};
