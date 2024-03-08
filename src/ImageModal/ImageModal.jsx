import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { SlLike } from "react-icons/sl";

const ImageModal = ({ selectedImage, modalIsOpen, closeModal }) => {
     if (!selectedImage || !selectedImage.urls) {
         return;
    }
    return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
            contentLabel="Image Modal"
            className={css.Modal}
              overlayClassName={css.Overlay}
      >
     
          <img className={css.image} src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
          <div className={css.textContainer}>
            <p className={css.text}> <SlLike/>{selectedImage.likes}</p>
          <p className={css.text}>Tags: </p>
                 <ul className={css.tags}>
                    {selectedImage.tags.map(tag => (
                        <li>#{tag.title}</li>
                    ))}
                </ul>
         
                     
           
          </div>
  
      </Modal>


    )
}
export default ImageModal;
