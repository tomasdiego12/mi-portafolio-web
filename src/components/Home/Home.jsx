const Home = () => {
    return (
        <section id="inicio" className="inicio">
    <div className="contenido-banner">
        <div className="contenido-img">
            <img src="img/perfil.jpg" alt="Foto de perfil de Tomas Gallardo"/>
        </div>
    <h1>SOY TOMAS GALLARDO</h1>
        <h2>Desarrollador Frontend</h2>
            <div className="redes">
                <a href="https://www.instagram.com/tomas_diego01" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/tomas-gallardo-526b562b8/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://wa.me/5491166512228"
                target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>

            <a href="CV-Tomas Diego Gallardo-Desarrollador.pdf" download className="btn-cv">Descargar CV
            </a>
    </div>
</section>
    );
}

export default Home;