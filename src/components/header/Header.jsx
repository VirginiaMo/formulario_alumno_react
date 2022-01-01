import Image from '../imagen/Image';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='containerHeader'>
            <Image />
                <h3> Nombre Alumno</h3>
            <div className='titleContainer'>
                <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                <p>Valencia</p>
                <span></span>
                <p>España</p>
            </div>

        </div>
      );
}
 
export default Header;