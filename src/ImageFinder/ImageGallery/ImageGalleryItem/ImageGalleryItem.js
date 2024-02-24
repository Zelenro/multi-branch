import { Component } from 'react';
import { Modal } from '../../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    // console.log(image);
    return (
      <>
        <li className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.openModal}
          />
        </li>
        {this.state.isModalOpen && (
          <Modal
            image={image}
            closeModal={this.closeModal}
            state={this.state.isModalOpen}
          />
        )}
      </>
    );
  }
}
