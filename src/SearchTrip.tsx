
import { useState } from 'react'
import type { SubmitEvent } from 'react'

export default function SearchTrip() {
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        setSubmitted(true)
    }

    return(
        <form className="search-trip" onSubmit={handleSubmit} aria-label="Buscar un viaje">
            <h1>Busca tu próximo viaje</h1>
            <label>
                <span className="sr-only">Origen</span>
                <input name="origin" placeholder="Origen" required />
            </label>
            <label>
                <span className="sr-only">Destino</span>
                <input name="destination" placeholder="Destino" required />
            </label>
            <button type="submit">Buscar</button>
            {submitted && <p className="search-message" role="status">Selecciona un trayecto para continuar.</p>}
        </form>
    )
}