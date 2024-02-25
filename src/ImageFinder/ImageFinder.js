import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from './Services/api';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import '../index.css';
import '../App.css';

class ImageFinder extends Component {
  state = {
    images: null,
    isLoading: false,
    error: false,
    page: 1,
    perPage: 3,
    searchImages: 'cat',
  };

  findImage = async value => {
    const { page, perPage } = this.state;
    try {
      this.setState({ images: null, isLoading: true, searchImages: value });
      const arrayImg = await API.getImages(value, page, perPage);
      this.setState({ images: arrayImg });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = async () => {
    const { searchImages, page, perPage } = this.state;

    this.setState({ page: parseInt(page) + 1 });
    try {
      const newImages = await API.getImages(searchImages, page + 1, perPage);
      // console.log(newImages);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  };

  async componentDidMount() {
    const { searchImages } = this.state;
    try {
      if (searchImages !== '') {
        await this.findImage(searchImages);
      }
      return;
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.searchImages !== prevState.searchImages) {
      await this.findImage(this.state.searchImages);
    }
  }

  componentWillUnmount() {}

  render() {
    const { images, isLoading, error, searchImages } = this.state;
    return (
      <>
        {error && <p>{error.message}</p>}
        <Searchbar onSubmit={this.findImage} />
        {isLoading ? (
          <Loader />
        ) : images === null ? (
          <h1>No {searchImages} images</h1>
        ) : (
          <ImageGallery
            images={images}
            error={error}
            searchImages={searchImages}
            onClick={this.handleLoadMore}
          />
        )}
        <ToastContainer />
      </>
    );
  }
}

export default ImageFinder;
