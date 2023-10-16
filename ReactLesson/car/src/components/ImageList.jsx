<<<<<<< HEAD
import './ImageList.css'
import {ImageShow} from './ImageShow';

export const ImageList = ({images}) => {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });


    return(
        <div className='image-list'>{renderedImages}</div>
    );
=======
import {ImageShow}from "./ImageShow";

export const ImageList = ({images}) => {
    const renderedImage = images.map(image =>{
        return <ImageShow key={image.id}  image={image}/>
       })
    
      return <div>
        {renderedImage}
      </div>
>>>>>>> e352c6f228431e408c5334d7640eb2f1a72bf0be
};