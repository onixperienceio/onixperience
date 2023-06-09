import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'sistere'
    const category = 'performance'

    const creditos = [
        ['', ''],
        ['', ''],
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
                    title='sistere'
                    subtitle = 'Interactive Virtual Performance'
                    year={`2020`}
                    opening={<>2020 Flusslab Artistic Residency (GER-ARG). Online openings.</>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        In order not to behave like automatons in this age subordinated by programs and AI, it is necessary to train sensoriality and memory and to train to include questions such as: Are the images I see real or artificial?<br />
                        SISTERE is an interactive training through a virtual environment with live performances. It arises in pandemic, as a device of resistance, as a space to sharpen perception under the question: What of all this really belongs to me?
                    </>}
                    credits={<>
                        PRODUCED BY SISTERE Collective<br />
                        PERFORMED BY ONIX- Victoria Momeño, Tania Alejandra, Anik Pedro Pipoca, Victoria Lazcano<br />
                        VIRTUAL ENVIRONMENT BY Tania Alejandra<br />
                        ILLUSTRATIONS BY Andy Vicsa, Lucia Esnaurrizar, Yotzin Querrá, Gato, Sophia Perusquia, Jimena Terrones & Sofia Olea<br />
                        VOICES BY Danchi Del Conte, Katherine Marie, Miguel Romero, Emilio Nolasco, Juan Carmona, Abdiel Castillo, Adrian Belmont, Maframb & Eva Rodriguez<br />
                        WRITTEN TEXTS BY Amanda Alafita, Andrea Tovar, Andrea Angeles, Montse Bauche, Silvano Vitar, Roberto Rodriguez, Juan P. Rangel, Naxaren Eva Capuano. <br />
                        VOICE OF ADVERTISMENTS BY Eva Rodriguez<br />
                        TEXT OF ZIP-CORTEX ADVERTISMENT BY Eme Insua <br />
                        AI OF ZIP-CORTEX BY Sofia Efron <br />
                        TECHNICAL SUPPORT BY Axel Pineda.<br />

                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}/>
                        ))}
                        <br />
                        <p className='font-italic'>
                            SISTERE is an interdisciplinary collective that emerges from the artistic residency Flusslab, formed by four people from Germany, Spain, Mexico and Argentina and more than 15 collaborators from all over the world.
                        </p>
                    </>}
                    videoYoutube='https://www.youtube.com/embed/LqGvz057wdo'
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${category}/${carpeta}/${image}`}
                            key={1}/>
                    ))} 
                />
            </main>
        </div>
    )
}

export default Performance 
