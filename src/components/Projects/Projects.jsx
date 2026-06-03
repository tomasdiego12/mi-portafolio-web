const Projects = () => {

    const misProyectos = [
        {
                id:1,
                titulo: "Hercules PetShop",
                descripcion: "Plataforma de comercio electrónico interactiva desarrollada para una tienda de mascotas. Incluye navegación por catálogo de productos, carrito de compras dinámico y una interfaz responsiva orientada a brindar una experiencia de usuario fluida.",
                tecnologias: ["React", "JavaScript", "CSS"],
                imagen: "/img/E-commerce.png",
                linkGithub: "https://github.com/tomasdiego12/E-commerce-PetShop",
                linkDemo:"https://e-commerce-pet-shop-kridgl5tj.vercel.app/"
            },
        {
                id:2,
                titulo: "Supermercado Online",
                descripcion: "Aplicación de gestión comercial enfocada en la administración de ventas e inventario. El sistema permite procesar datos y calcular totales de forma dinámica. Actualmente en fase de expansión para integrar nuevas funcionalidades y optimizar la base de datos.",
                tecnologias: ["JavaScript", "React", "Node.js", "CSS"],
                imagen: "/img/Supermercado.png",
                linkGithub: "https://github.com/tomasdiego12/Sistema-de-Facturacion-Web"
        },
        {
                id:3,
                titulo: "Calculadora Interactiva",
                descripcion: "Herramienta funcional que resuelve operaciones matemáticas en tiempo real. Destaca por la implementación de un 'Dark Mode' (modo oscuro) interactivo, demostrando un buen manejo del estado de la aplicación y personalización de la interfaz.",
                tecnologias: ["JavaScript", "Hooks", "CSS"],
                imagen: "/img/Calculadora.png",
                linkGithub: "https://github.com/tomasdiego12/calculadora-claro-oscuro"
        }
    ]
    return (
        <section id="proyectos" className="proyectos">
            <h1>Mis Proyectos </h1>
                <div className="galeria-proyectos">
                    {misProyectos.map((proyecto) =>(
                        <div className="proyecto-card" key={proyecto.id}>
                            <img src={proyecto.imagen} alt={proyecto.titulo} />
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <div className="tecnologias">
                                {proyecto.tecnologias.map((tec) =>(
                                    <span className="badge" key={tec}>{tec}</span>
                                ))}
                            </div>
                            <div className="enlaces">
                                {proyecto.linkDemo && (
                                    <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer">Ver Demo</a>
                                )}
                                <a href={proyecto.linkGithub} target="_blank" rel="noopener noreferrer">Ver Código</a>
                            </div>
                        </div>
                    ) )}
                </div>
        </section>
    )
        
}

export default Projects;