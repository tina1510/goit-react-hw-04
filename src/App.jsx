import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar/SearchBar';
import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './image-api';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';

import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function gatDate() {
      try {
       
        setIsLoading(true);
        setError(false);
       

       const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
      }); 
    }
    catch (error) {
       setError(true)
    }
       finally {
         setIsLoading(false);
    }
    }
    gatDate()
  }, [query, page])

  const handleSubmit = async (newQuery) => {
     setImages([]);
    setQuery(newQuery)
    setPage(1);

  }
  const handleLoadMore = () => {
    setPage(page+1)
  }
  const onSelectImage = (image) => {
    setSelectedImage(image);
    openModal()
  };
 function openModal() {
    setModalIsOpen(true);
 }
    function closeModal() {
    setModalIsOpen(false);
  }
  


  return (
  <>
      <SearchBar onSubmit={handleSubmit} ></SearchBar>   
     
      {error && <ErrorMessage /> }
      <div>
        {images.length > 0 && 
          <ImageGallery images={ images} onSelectImage={onSelectImage} />  
        }
        {images.length > 0 && !isLoading && 
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        }
         {isLoading && <ThreeDots/> }
       
      </div>
    
        <ImageModal selectedImage={selectedImage}
          modalIsOpen={modalIsOpen} closeModal={closeModal} />
    
   
    </>
  )
}

export default App
