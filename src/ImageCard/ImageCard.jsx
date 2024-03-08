import css from "./ImageCard.module.css"
const ImageCard = ({ onSelectImage, image }) => {
    return (
 <div onClick={() => onSelectImage(image)}>
                     <img  className={css.image} src={image.urls.small} alt={image.alt_description} autofocus />
                  </div>
    )
}
export default ImageCard;
