import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import * as API from './Services/api';

class ImageFinder extends Component {
  state = {
    images: [],
    isLoading: false,
    page: '1',
    perPage: '12',
    searchImages: '',
  };

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

  handleChange = value => {
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      // [name]: value,
    }));
  };

  findImage = async value => {
    console.log(value);
    const images = await API.getImages(value);
    console.log(images);
    this.setState({ images: images });
  };

  componentDidMount() {
    if (!this.state.searchImages) {
      this.findImage(this.state.searchImages);
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.searchImages === null) {
      console.log(this.state.searchImages);
      // localStorage.setItem('images', JSON.stringify(this.state.images));
      this.findImage(this.state.searchImages);
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Searchbar onSubmit={this.findImage} handleChange={this.handleChange} />
        <ImageGallery images={this.state.images} />
        <Button />
      </>
    );
  }
}

export default ImageFinder;

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
