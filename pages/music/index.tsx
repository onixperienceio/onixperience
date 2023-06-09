import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

// este es un ejemplo de pagina interna de proyecto particular
// no esta en el menu pero si vas a onixperience.io/music se puede ver
// una vez que quieras que aparezca en el menu vas a components/ProjectsHeader.tsx y ahi agregas el link en el menu

const Music: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'music' // aca va el nombre de la carpeta donde subiste las fotos de esta carpeta

    // si no hay creditos, podes borrar todo y dejar solo los corchetes asi:
    // const creditos = []
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
                // aca lo que quieras que quede vacio lo dejas solo con comillas ''
                // los creditos y las imagenes solo se van a mostrar si el las listas de arriba hay algo, en esta parte dejalo tal cual 
                    title='Music'
                    subtitle = ''
                    year=''
                    opening=''
                    category=''
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Esto es un parrafo con un <span className='font-italic'>salto de linea.</span> <br />
                        Aca otro parrafo. <br />
                        <span className='font-bold'>Este parrafo en negrita</span>
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
                    // desde el video en youtube:
                    // share --> embed --> copiar el link que aparece en el texto que te tira ahi en src
                    videoYoutube=''
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />            
            </main>
        </div>
        
    )
}

export default Music
