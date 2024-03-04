import * as basicLightbox from 'basiclightbox';

export const Modal = ({ image }) => {
  const largeImageURL = image.largeImageURL;
  const tagsImage = image.tags;

  const instance = basicLightbox.create(
    `
      <div class="Overlay">
    <div class="Modal">
      <img 
        src=${largeImageURL}
        alt=${tagsImage}         
        width="800"
        height="600"          
      />
    </div>
  </div>
    `,
    {
      onShow: instance => {
        const modalElement = instance.element();

        const handleKeyDown = event => {
          if (event.keyCode === 27 || event.key === 'Escape') {
            instance.close();
          }
        };

        const handleClick = () => {
          modalElement.removeEventListener('keydown', handleKeyDown);
          instance.close();
        };

        document.addEventListener('keydown', handleKeyDown);

        modalElement.onclick = handleClick;
      },
    }
  );

  instance.show();

  return null;
};
