import ModalImagen from "../../../components/ModalImagen/ModalImagen"
import NavBar from "../../../components/NavBar/NavBar"
import TarjetaImagen from "../../../components/TarjetaImagen/TarjetaImagen"
import '../inicio/inicio.css'



    const search = async () => {
        try {
          const response = await fetch("https://api.pexels.com/v1/search?query=people", {
            method: 'GET',
            headers: {
              'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data)
            return(data);
          } else {
            console.error('Error al recuperar datos de la API');
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }

    }
  
const Inicio = async () =>{

    const images = await search()


    console.log(images.photos.src)
    return (
        <>
        <NavBar  />
        <div class="grid-container">
            {
                images.photos.map((img)=>(
        <div class="grid-item">
             <ModalImagen img={img}/>
       </div>

                ))
            }
     


     
    </div>

        </>
    )
}
export default Inicio