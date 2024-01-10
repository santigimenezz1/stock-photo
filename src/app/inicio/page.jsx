import ModalImagen from "../../../components/ModalImagen/ModalImagen"
import NavBar from "../../../components/NavBar/NavBar"
import TarjetaImagen from "../../../components/TarjetaImagen/TarjetaImagen"
import '../inicio/inicio.css'

const Inicio = () =>{
    return (
        <>
        <NavBar />
        <div class="grid-container">
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Sticker_slap_csd1dl.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/28dde92b-0be0-4c79-b4a8-2d4bb3540c18_azaw7v.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/14376ba4-ec41-4a34-8706-511c137d4c5e_lb3sau.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>
      <div class="grid-item">
       <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
      </div>

      <ModalImagen />
     
    </div>

        </>
    )
}
export default Inicio