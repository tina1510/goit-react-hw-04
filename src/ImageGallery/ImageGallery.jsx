

import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({images, onSelectImage}) => {

    return (
         <ul className={css.gallery}>
          {images.map(image =>
              <li key={image.id} className={css.galeryItem}>
              <ImageCard onSelectImage={onSelectImage} image={image}></ImageCard>
              </li>
          ) 
            }
 
      </ul> 
    )
}
export default ImageGallery;