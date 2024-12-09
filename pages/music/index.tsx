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
                       Singer-songwriter presenting a work-in-progress album, Neocity.</span> <br />
                       An album that delves into the many sides of Berlin, a mix of hyperpop, with latin rhythms like cumbia and trap, . <br />
                       a celebration of self and yet a journey into the visceral. These openings serve as an exploration of the deeper meanings within the songs<br />
                       an exploration through the ritual , the sacred and the revelry , the impulsive, embracing the latin cosmovision of finding joy despite everything. <br /> 
                        </span>
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
                    imagenes={(
                        <div className="video-container">
                            {/* Vimeo Video Embed */}
                            <iframe
                                src="https://player.vimeo.com/video/944843505?h=676b3d6289&autoplay=0&muted=0&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    maxWidth: '100%',
                                    margin: '0 auto',
                                    display: 'block',
                                }}
                                title="Onix Show Reel"
                            ></iframe>
                        </div>
                    ))}
                />            
            </main>
        </div>
        
    )
}

export default Music
