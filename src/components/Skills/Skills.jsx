const Skills = () => {
    const techSkills = [ 
    {nombre: "Javascript", porcentaje: "80%", claseColor: "javascript"} ,

    {nombre:"HTML", porcentaje:"90%", claseColor:"html"},

    {nombre:"CSS", porcentaje:"90%", claseColor:"css"},

    {nombre:"React", porcentaje:"90%", claseColor:"react"},

    {nombre:"Node.js", porcentaje:"70%", claseColor:"node"},

    {nombre:"Typescript", porcentaje:"70%", claseColor:"typescript"},

    {nombre:"MongoDB", porcentaje:"70%", claseColor:"mongodb"},

    {nombre:"GitHub/Git", porcentaje:"70%", claseColor:"github"}
    ]

        const profSkills = [ 
    {nombre: "Resolucion de Problemas", porcentaje: "100%", claseColor: "resolucion"} ,

    {nombre:"Trabajo en Equipo", porcentaje:"100%", claseColor:"equipo"},

    {nombre:"Aprendizaje Continuo", porcentaje:"100%",claseColor:"aprendizaje"},

    {nombre:"Comunicacion Efectiva", porcentaje:"90%", claseColor:"comunicacion"},

    {nombre:"Autogestion", porcentaje:"90%", claseColor:"autogestion"}
    ]

    return(
        <section className="skills" id="skills">
            <div className="contenido-seccion">
                <h2>Skills</h2>
            <div className="fila">
        <div className="col">
        <h3>Technical Skills</h3>
        {
            techSkills.map((habilidad) => (
                <div className="skill" key={habilidad.nombre}>
                    <span> {habilidad.nombre} </span>
                    <div className="barra-skill">
                        <div className={`progreso ${habilidad.claseColor}`}>
                            <span> {habilidad.porcentaje} </span>
                        </div>
                    </div>
            </div>
        ))}
    </div>

    <div className="col">
        <h3>Profesional Skills</h3>
        {
            profSkills.map((habilidad) => (
                <div className="skill" key={habilidad.nombre}>
                    <span> {habilidad.nombre} </span>
                        <div className="barra-skill">
                            <div className={`progreso ${habilidad.claseColor}`}>
                                <span> {habilidad.porcentaje} </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
    )
}

export default Skills;