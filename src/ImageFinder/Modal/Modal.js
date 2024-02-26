import * as basicLightbox from 'basiclightbox';

import { nanoid } from 'nanoid';

export const Modal = ({ image, state }) => {
  const largeImageURL = image.largeImageURL;
  const tagsImage = image.tags;

  const instance = basicLightbox.create(
    `
      <div id="pop" key=${nanoid()} class="Overlay">
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
      // onShow: instance => {
      //   const modalElement = instance.element();
      //   const handleKeyDown = event => {
      //     if (event.keyCode === 'Escape') {
      //       instance.close();
      //     }
      //   };
      //   console.log(handleKeyDown);
      //   modalElement.addEventListener('keydown', handleKeyDown);
      //   instance.element().querySelector('#pop').onclick = () => {
      //     modalElement.removeEventListener('keydown', handleKeyDown);
      //     instance.close();
      //   };
      // },

      onShow: instance => {
        instance.element().querySelector('#pop').onclick = instance.close;
      },
    }
  );

  instance.show();

  return null;
};
