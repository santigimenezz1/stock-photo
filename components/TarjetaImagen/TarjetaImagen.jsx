 import '../TarjetaImagen/tarjetaImagen.css'
import BotonDescarga from './BotonDescarga/BotonDescarga'
const TarjetaImagen = ( {url} ) => {
    return (
        <div className="tarjetaImagen">
            <img src={url}></img>
            <div className='botonDescarga'>
            <BotonDescarga />
            </div>
        </div>
    )
}
export default TarjetaImagen