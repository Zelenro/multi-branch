import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  // console.log(images);
  return (
    <>
      <ul className="ImageGallery">
        {images &&
          images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
      </ul>
    </>
  );
};
