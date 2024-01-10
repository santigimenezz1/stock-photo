 'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalImagen/modalImagen.css'
import BotonDescarga from '../TarjetaImagen/BotonDescarga/BotonDescarga';
import BotonClose from './BotonClose/BotonClose';
import TarjetaImagen from '../TarjetaImagen/TarjetaImagen';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalImagen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <div onClick={()=>handleOpen()}>
             <TarjetaImagen url={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/Pin_on_graffiti_alfabeto_wjn1a0.jpg"} />
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalImagen'>
            <div className='botonClose'>
       <BotonClose handleClose={handleClose} />
            </div>
            <div className='botonDescarga__modal'>
        <BotonDescarga />
            </div>
          <img className='imagen__modal' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704911868/28dde92b-0be0-4c79-b4a8-2d4bb3540c18_azaw7v.jpg'></img>
        </div>
      </Modal>
    </div>
  );
}
export default ModalImagen