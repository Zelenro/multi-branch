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
      onShow: instance => {
        instance.element().querySelector('#pop').onclick = instance.close;
      },
    }
  );

  instance.show();

  return null;
};
