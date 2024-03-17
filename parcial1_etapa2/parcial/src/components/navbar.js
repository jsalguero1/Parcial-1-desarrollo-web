import './styles/navbar.css';
import banner from '../images/banner.jpg';
function Navbar(){
    return(
        <nav id='navbar__container'>
            <h1 id="titulo__nav"><a id='titulo__nav__link' href='/'>TuSegundazo.com</a></h1>
            <img src={banner} alt='foto pagina' id='banner__img'/>
        </nav>
    );
}

export default Navbar;