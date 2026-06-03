import {useState} from 'react'

function Header () {
    const [menuVisible, setMenuVisible] = useState(false);
    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }
    return (
        
<div className="contenedor-header">
    <header>
    <div className="logo">
    <a href="#">TOMAS</a>
    </div>
    <nav id="nav" className={menuVisible ?"responsive" : ""} >
        <ul>
        <li><a href="#inicio" >INICIO</a></li>
        <li><a href="#sobremi" >SOBRE MI</a></li>
        <li><a href="#curriculum" >CURRICULUM</a></li>
        <li><a href="#proyectos" >PROYECTOS</a></li>
        <li><a href="#skills" >SKILLS</a></li>
        <li><a href="#contacto" >CONTACTO</a></li>
      </ul>
    </nav>
    <div className="nav-responsive" onClick={toggleMenu}>
      <i className="fa-solid fa-bars"></i>
    </div>
    </header>
</div>
    )
}

export default Header;
