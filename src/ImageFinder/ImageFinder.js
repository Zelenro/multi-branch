import axios from 'axios';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { KEY, URL, page, perPage, searchImages } from './globalParams';
import { ImageGallery } from './ImageGallery/ImageGallery';

class ImageFinder extends Component {
  state = {
    images: '',
    // isLoading: false,
  };

  handlerInput = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    return value;
  };

  handlerSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    const findContact = this.filteringContactsBeforeAdding(name);
    if (findContact.length > 0) {
      alert(`${findContact[0].name} is already in contacts`);
      return;
    }
    this.addContacts(name, number);
    resetForm();
  };

  componentDidMount() {
    const itemLocal = localStorage.getItem('images');
    const imagesLocal = JSON.parse(itemLocal);
    if (imagesLocal !== null) {
      this.setState({
        images: imagesLocal,
      });
    }

    axios
      .get(URL, {
        params: {
          q: searchImages,
          page: page,
          key: KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: perPage,
        },
      })
      .then(res => {
        const arrayImg = res.data.hits;
        this.setState({ images: arrayImg });
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.images !== prevState.images) {
      localStorage.setItem('images', JSON.stringify(this.state.images));
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}

export default ImageFinder;
