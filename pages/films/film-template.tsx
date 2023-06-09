import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

// template para proyecto dentro de films
// podes verlo en onixperience.io/films/film-template

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const category = 'film' // carpeta de fotos dentro de public/images , esta dividido como en el menu: performance, film, publication, workshop
    const carpeta = 'template' // subcarpeta del proyecto

    const creditos = [
        ['rol 1', 'nombre 1'],
        ['rol 2', 'nombre 2'],
    ]

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='template'
                    subtitle = 'feature film'
                    year={`2023`}
                    opening={<>
                        2023 Evento / Berlin, Germany<br />
                        2023 Otra / Buenos Aires, Argentina
                    </>}
                    category={category} // no hace falta cambiar, esto toma lo que pusiste arriba en category.
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       Esto es un parrafo. <br />
                       Otro parrafo. <br />
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}
                        <br />
                        <p>Aca podes agregar mas texto si queres.</p>
                        <p className='font-italic'>Asi si queres que sea en italica</p>
                    </>}
                    videoYoutube='https://www.youtube.com/embed/74xA-1NxIR0' // link q aparece cuando pones 'share' --> 'embed'
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${category}/${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />
            </main>
        </div>
    )
}

export default Film 
