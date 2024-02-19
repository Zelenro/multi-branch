export const ImageGalleryItem = ({ image }) => {
  // console.log(image);
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    </>
  );
};
