import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
function SliderReact() {

    const imagenes = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
      

  return (
    <div className='w-3/5 mx-auto my-8'>

      <h1 className='text-center text-4xl my-4'>React Slider</h1>
      <ImageGallery items={imagenes}
        /* boton de play */ 
        showPlayButton ={true}  

        /* icono de pantalla completa*/
        showFullscreenButton={false} 

        /* miniaturas*/
        showThumbnails={true}  

        /* navegacion */
        showNav = {true}  

        /* botones "puntitos" */
        showBullets = {true} 

        /*auto play*/
        autoPlay ={true} 

        /* la duracion del slide */
        slideDuration={1000}   

         /* la duracion del intervalo del slide */
        slideInterval={2000}  
        
         /* posicion de minearuras, "right,left,top,bottom" */
        thumbnailPosition='left'
      />
    </div>
  )
}

export default SliderReact