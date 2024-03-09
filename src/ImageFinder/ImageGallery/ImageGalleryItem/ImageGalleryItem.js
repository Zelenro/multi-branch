import { useState } from 'react';
import { Modal } from '../../Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickOn = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
          onClick={onClickOn}
        />
      </li>
      {isModalOpen && <Modal image={image} />}
    </>
  );
};
