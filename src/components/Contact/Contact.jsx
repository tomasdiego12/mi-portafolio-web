import { useState } from 'react'

const Contact = () => {

        const [formData, setFormData] = useState({
            nombre: '',
            email:'',
            mensaje:''
        })
        const [enviado, setEnviado] = useState(false)
        const [error, setError] = useState(false)

        function handleChange(e) {
            setFormData ({...formData, [e.target.name]: e.target.value})
        }

        async function handleSubmit(e) {
            e.preventDefault()
            const response = await fetch('https://formspree.io/f/mjgzppva', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                setEnviado(true)
                setFormData({ nombre: '', email: '', mensaje: '' })
            } else {
                setError(true)
            }
        }

        return (
        <section id="contacto" className="contacto">
            <div className="contenido-seccion">
                <h2>Contacto</h2>
                <p className="subtitulo-seccion">¿Tenés alguna propuesta? ¡Escribime!</p>

                {enviado && (
                    <p className="mensaje-exito">¡Mensaje enviado con éxito! Te respondo a la brevedad.</p>
                )}
                {error && (
                    <p className="mensaje-error">Algo salió mal. Intentá de nuevo.</p>
                )}

                <form className="formulario-contacto" onSubmit={handleSubmit}>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Tu email"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Tu mensaje"
                            rows="5"
                            required
                        />
                    </div>

                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
