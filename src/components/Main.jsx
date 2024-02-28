import React from 'react'
import { Image } from './Image'
import '../styles/Main.css'

function Main() {
    return (
        <main className='main'>
            <Image />
            <section className='titulo-principal'>
                <h2>EL LAGO SALADO: EL DESIERTO INUNDADO</h2>
            </section>
            <section className='articulos'>
                <article>
                    <h3>FRONTERA ENTRE EE.UU Y MEXICO: LA VIDA EN LA LINEA</h3>
                </article>
                <article>
                    <h3>EL REGRESO DE LA VIDA SILVESTRE</h3>
                </article>
                <article>
                    <h3>A LO LARGO DE LA FRONTERA POR LA GUERRA EN AFGANISTAN</h3>
                </article>


            </section>

        </main>
    )
}

export { Main }
