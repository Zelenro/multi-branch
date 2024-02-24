import * as basicLightbox from 'basiclightbox';

export const Modal = ({ image, closeModal, state }) => {
  console.log(image);
  const largeImageURL = image.largeImageURL;
  const tagsImage = image.tags;

  const instance = basicLightbox.create(
    `<div className="overlay">
      <div className="modal">
        <img
          src=${largeImageURL}
          alt=${tagsImage}         
          width="800"
          height="600"
          onClick={() => instance.close()}
        />
      </div>
    </div>`
  );

  instance.show(() => console.log('lightbox now visible'));
  //   instance.close(() => console.log('lightbox not visible anymore'));

  // Render modal
  //   instance.show();

  // Ensure to close the modal on component unmount
  //   instance.close();

  // You should return JSX here, not a function
  return null;
};
