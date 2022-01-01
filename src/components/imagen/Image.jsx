import fotoPerfil from '../../assets/Foto.jpg';
import './Image.css'


const Image = () => {
    return (
        <div className="imagen">
            <img src={fotoPerfil} alt="Foto Perfil" />
        </div>
      );
}
 
export default Image;