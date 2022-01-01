import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Etiquetas from '../etiquetas/Etiquetas';
import PDF from '../pdf/PDF';


const Form = () => {
    return (
        <div className='containerForm'>
            <form>
                <label>Nombre y Apellidos</label>
                <input className='nombreAlumno' type="text" placeholder='Nombre Alumno'></input>
                <label className='labelTelefono'>Nº Teléfono</label>
                <input type="text"></input>
                <label className='inputLabel'>Email</label>
                <input className='inputEmail' type="email" placeholder='email'></input>
                <label className='labelPais'>País</label>
                <select>
                    <option value="1"></option>
                    <option value="2">España</option>
                    <option value="3">Suiza</option>
                    <option value="4">Argentina</option>
                    <option value="5">Alemania</option>
                    <option value="6">Estados Unidos</option>
                </select>
                <label className='inputLabelCiudad'>Ciudad</label>
                <select className='inputCiudad'>
                    <option value="1"></option>
                    <option value="2">Málaga</option>
                    <option value="3">Barcelona</option>
                    <option value="4">Sevilla</option>
                    <option value="5">Galicia</option>
                    <option value="6">Valencia</option>
                </select>
                <label className='labelTraslado'>Traslado</label>
                <select>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                </select>
                <label className='inputPresencialidad'>Presencialidad</label>
                <select className='selectPresencialidad'>
                    <option value="1">Presencial</option>
                    <option value="2">Remoto</option>
                </select>
                    <PDF />                    
                   <button> <FontAwesomeIcon className='trashIcon' icon={faTrashAlt} />Borrar</button>
                <label className='labelEtiquetas'>Etiquetas</label>
                <select>
                    <option value="1">Escribe para buscar...</option>
                    <option value="2">HTML</option>
                    <option value="3">REACT</option>
                    <option value="4">ANGULAR</option>
                    <option value="5">VUE</option>
                </select>
                <Etiquetas tags={['HTML', 'CSS', 'REACT']} />
            </form>
        </div>
      );
}

 
export default Form;

