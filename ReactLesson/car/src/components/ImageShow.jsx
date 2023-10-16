<<<<<<< HEAD
export const  ImageShow = ({image}) => {
    return(
        <div> <img src={image.urls.small} alt={image.alt_description} /> </div>
    );
}
=======

export const ImageShow = ({image}) => {
    return (
        <div>
            <img  src={image.urls.small} alt={image.all_description}/>
        </div>
      )
};
>>>>>>> e352c6f228431e408c5334d7640eb2f1a72bf0be
