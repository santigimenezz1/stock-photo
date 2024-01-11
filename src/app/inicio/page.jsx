 "use client"
import { useState } from "react"
import ModalImagen from "../../../components/ModalImagen/ModalImagen"
import NavBar from "../../../components/NavBar/NavBar"
import TarjetaImagen from "../../../components/TarjetaImagen/TarjetaImagen"
import '../inicio/inicio.css'


const Inicio =  () => {
    const[text, setText] = useState("paris")
    const[imagenes, setImagenes] = useState([])


    console.log(imagenes)
    return (
        <>
            <NavBar text={text} setText={setText} setImagenes={setImagenes} />
            <div class="grid-container">
            {
                imagenes.map((img)=>(
                        <div className="grid-item">
                        <ModalImagen img={img} />
                </div>
               
               ))
               
            }
            </div>

        </>
    )
}
export default Inicio