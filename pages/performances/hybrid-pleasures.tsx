import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'hybrid-pleasures'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='hybrid pleasures'
                    subtitle = 'inmersive performance'
                    year={`2022`}
                    opening={<>2022 Reiche ProjektHaus / Berlin, Germany</>}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        An immersive and performative installation that proposes to autohack our desires and our bodies becoming cyborgs in a habitat that mutates between the organic, the inorganic and the bioelectric. A laboratory of erotic practices to deprogram us and culminate in a mutant party. What pleasures does an organic cyborg have?
                    </>}
                    credits={<>
                    <span className='font-bold'>PRODUCED BY:</span> CC_LAB Collective<br />
                        INSTALLATION, VIDEOS, VJ AND PERFORMANCE BY: ONIX-Victoria Momeño, Blumen Salas, Camila Delia, Carolina Iglesias, Tin Welt y Hernan Kochman.<br />
                        DJS Niño Envuelto, Pendejx <br />
                        THANKS TO Valeria Nesis, Kiki Ramos, Josefina Barreix, Selu Herraiz, Miguel Goya, Marc Espinar, Aldana Lucía, Julieta Fradkin, Mar Guevara, Aminta Espinoza, Mica Lynn, Reiche, Jelena, Nadja Krüger, Philipp Fröhlich, Martin Schlecht & Coven.<br />
                        <br />
                        <p className='font-italic'>CC_LAB Collective is a multidisciplinary and performative experimental laboratory based in Berlin, which researches and produces about desire and posthumanism. CC_LAB explores mutant bodies and desires from a migrant and precarious perspective and from different artistic and technological disciplines, fusing performance, real time endoscopic cameras, vj and sound-light interfaces.</p>

                    </>}
                    videoYoutube='https://www.youtube.com/embed/Is81XHmEG3M'
                />
                
                {images.map((image) => (
                    <ImageGallery
                    image={`${carpeta}/${image}`}
                        key={1}/>
                ))}

               
            </main>
        </div>
    )
}

export default Performance 
