const Resume = () => {
    return (
        <section id="curriculum" className="curriculum">
            <div className="contenido-seccion">
                <h2>Curriculum</h2>
                <p className="subtitulo-seccion">Educación y experiencia</p>

                <div className="resume-grid">

                    <div className="resume-card">
                        <div className="resume-card-header">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <h3>Educación</h3>
                        </div>

                        <div className="resume-item">
                            <h4>Técnico en Programación</h4>
                            <p className="resume-lugar">Teclab Instituto Técnico Superior</p>
                            <span className="resume-badge">Finalizado nov. 2025</span>
                            <p className="resume-desc">
                                Formación técnica en desarrollo de software, programación 
                                orientada a objetos y bases de datos.
                            </p>
                        </div>

                        <div className="resume-item">
                            <h4>Desarrollo Web con React</h4>
                            <p className="resume-lugar">CoderHouse</p>
                            <span className="resume-badge">Finalizado abril. 2026</span>
                            <p className="resume-desc">
                                Construcción de interfaces modernas con React, hooks, 
                                componentes y consumo de APIs.
                            </p>
                        </div>
                    </div>

                    <div className="resume-card">
                        <div className="resume-card-header">
                            <i className="fa-solid fa-briefcase"></i>
                            <h3>Experiencia</h3>
                        </div>

                        <div className="resume-item">
                            <h4>Operario de Vía</h4>
                            <p className="resume-lugar">Trenes Argentinos</p>
                            <span className="resume-badge">2019 — 2026</span>
                            <p className="resume-desc">
                                Mantenimiento de infraestructura ferroviaria. Trabajo en 
                                equipo, cumplimiento de normas de seguridad y 
                                responsabilidad operativa en entornos exigentes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;