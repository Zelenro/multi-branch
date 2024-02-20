import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import * as API from './Services/api';
import { Circles } from 'react-loader-spinner';

class ImageFinder extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
    page: '1',
    perPage: '12',
    searchImages: null,
    imagesLoaded: false,
  };

  findImage = async value => {
    try {
      this.setState({ isLoading: true });
      this.setState({ searchImages: value });
      const { searchImages } = this.state;
      const arrayImg = await API.getImages(searchImages);
      this.setState({ images: arrayImg });
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false, imagesLoaded: true });
    }
  };

  async componentDidMount() {
    try {
      await this.findImage();
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.searchImages !== prevState.searchImages) {
      this.findImage(this.state.searchImages);
    }
  }

  componentWillUnmount() {}

  render() {
    const { images, isLoading, error, searchImages, imagesLoaded } = this.state;
    return (
      <>
        {error && <p>Что пошло не так !!!</p>}
        <Searchbar onSubmit={this.findImage} handleChange={this.handleChange} />
        {isLoading || !imagesLoaded ? (
          <Circles
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <ImageGallery
            images={images}
            error={error}
            searchImages={searchImages}
          />
        )}

        <Button />
      </>
    );
  }
}

export default ImageFinder;

// handlerInput = e => {
//   const { value } = e.currentTarget;
//   this.setState({ searchImages: value });
//   return value;
// };

// handlerInput = e => {
//   const { name, value } = e.currentTarget;
//   this.setState(prevState => ({
//     ...prevState,
//     [name]: value,
//   }));
//   return value;
// };

// handleChange = value => {
//   // console.log(value);
//   this.setState(prevState => ({
//     ...prevState,
//     // [name]: value,
//   }));
// };

// const { searchImages, page, perPage } = this.state;
// const images = await API.getImages(searchImages, page, perPage);
// this.setState({ images: images });

// const itemLocal = localStorage.getItem('images');
// const imagesLocal = JSON.parse(itemLocal);
// if (imagesLocal !== null) {
//   this.setState({
//     images: imagesLocal,
//   });
// }
// const { searchImages, page, perPage } = this.state;
// fetch(
//   `${URL}?key=${KEY}&q=${searchImages}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
// )
//   .then(res => res.json())
//   // .then(data => console.log(data.hits))
//   .then(data => {
//     console.log(data);
//     const arrayImg = data.hits;
//     this.setState({ images: arrayImg });
//   })
//   .catch(error => {
//     console.error('Ошибка при получении данных:', error);
//   });
// axios
//   .get(URL, {
//     params: {
//       q: searchImages,
//       page: page,
//       key: KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: perPage,
//     },
//   })
// .then(res => {
//   const arrayImg = res.data.hits;
//   this.setState({ images: arrayImg });
// })
//   .catch(error => {
//     console.error('Ошибка при получении данных:', error);
//   });
