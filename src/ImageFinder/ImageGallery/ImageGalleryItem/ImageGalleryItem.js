import { Component } from 'react';
import { Modal } from '../../Modal/Modal';
// import { createPortal } from 'react-dom';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    // console.log(this.state);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    console.log(this.state);
  };

  onClickOn = () => {
    console.log(this.state);
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { image } = this.props;

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
          <Modal image={image} state={this.state.isModalOpen} />
        )}
      </>
    );
  }
}
