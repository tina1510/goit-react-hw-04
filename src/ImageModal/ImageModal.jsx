import css from "./ImageModal.module.css"
import Modal from 'react-modal';
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
       <div className={css.overlay}>
            <img className={css.modal} src={selectedImage.urls.regular} alt="" />
          </div>
      </Modal>


    )
}
export default ImageModal;
