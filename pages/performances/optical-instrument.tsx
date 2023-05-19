import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'io'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='optical instrument'
                    subtitle = 'music Visual Performance'
                    year={`2019`}
                    opening={<>
                        2019 Le Vent se Leve / París, Francia
                        2019 Loophole / Berlín, Alemania
                    </>}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpeg`}
                    description={<>
                       I-O is a ceremonial work that invites you to experience sensory and spiritual states. In the show, Josefina Barreix sings in both Spanish and Ranquel, the language of the pre-Columbian peoples from which she descends. The result is a piece with its own magic that refers both to the strength of the ancestral and the mystery of futuristic scenarios.

                    </>}
                    credits={<>
                        DIRECTION BY Josefina Barreix <br />
                        MUSIC BY Jsfnbrrx , Andres Marino & Sofja<br />
                        VISUALS BY FrenetikVoid<br />
                        PROGRAMMER Diego Dorado<br />
                        INTERACTIVE PROPOSAL Marcos Cabobianco<br />
                        SCENOGRAPHY BY Carla Martens & Francisca Armando<br />
                        COSTUME DESIGN BY Moroviski and Ceiborg<br />
                        CREATIVE COLLABORATION: ONIX- Victoria Momeño, Celeste Lambert, Guillermina Teves & Flavio Cabobianco.<br />
                        PARTICIPATION Maria Eugenia Garcia<br />
                        THANKS TO Cabobianco Family, Panni Margot <br />
                        VIDEO AND EDITION BY Juan Nasra<br />
                        EXECUTIVE PRODUCTION Jimena Serret<br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/AF9h-pcaDtM'
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
