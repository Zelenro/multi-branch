import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from './Services/api';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import '../index.css';
import '../App.css';

const ImageFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [searchImages, setSearchImages] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const findImage = searchImages => {
    setSearchImages(searchImages);
  };

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setPerPage(12);
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const arrayImg = await API.getImages(searchImages, page, perPage);
        console.log(arrayImg);
        if (arrayImg === null) {
          setImages(null);
          return;
        }
        if (images === null) {
          setImages([...arrayImg]);
          return;
        }
        setImages(prevImages => [...prevImages, ...arrayImg]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchImages]);

  return (
    <>
      {error && <p>{error.message}</p>}
      <Searchbar onSubmit={findImage} />
      {isLoading ? (
        <Loader />
      ) : images === null ? (
        <h1>No found image {searchImages} in fetch </h1>
      ) : (
        <ImageGallery
          images={images}
          error={error}
          searchImages={searchImages}
          onClick={handleLoadMore}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default ImageFinder;
