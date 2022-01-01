import './Etiquetas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const DeletableButton = ( { id, onDelete }) => {
        return (
            <button id='boton' onClick={(e) => onDelete(e, id)}>{id} <FontAwesomeIcon className='iconClose' icon={faTimes} /></button>
            
        )    
}

const Etiquetas = ( { tags } ) => {
   
    const [deleted, setDeleted] = useState([]);

    const onDeleteFunction = (e, id) => { setDeleted(deleted.concat([id])); e.preventDefault(); };

    var Items = tags
      .filter(tag => deleted.indexOf(tag) === -1)
      .map(tag => {
        return (
          <DeletableButton id={tag} onDelete={onDeleteFunction} />
        );
      }); 

    return (
      <div className='etiquetas'>
        {Items}
      </div>
    );
  }

 
export default Etiquetas;