import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['2.jpg', '1.jpg', '3.jpg', '4.jpg'];
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
                    subtitle={`short film`}
                    year={`2023`}
                    opening={``}
                    category={`film`}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        In a cyberpunk laboratory, at night, Blumenatrix uses the scientific machinery to explore his body. In another dimension, dwells Onyxen, a human-arachnid creature that only appears to him at certain occasions. But this encounter is different, they will discover pleasure, desire and fantasies for the first time in their life.
                        <br />
                        <div className=''>
                            (Soon)
                        </div>
                    </>}
                    credits={<>
                        PRODUCED BY: CC_LAB Collective<br />
                        PERFORMED BY: ONIX- Victoria Momeño & Blumen Salas<br />
                        PHOTOGRAPHY DIRECTION BY: Tin Welt <br />
                        ASSISTANCE AND VJ BY: Hernan Kochman <br />
                        EDITED BY: Camila Delia & Carolina Iglesias<br />
                        COLOUR BY: Tin Welt<br />
                        <br />
                        <p className='font-italic'>CC_LAB Collective is a multidisciplinary and performative experimental laboratory based in Berlin, which researches and produces about desire and posthumanism.<br />
                        In search of the political character of the body and desire, it articulates questions about how to expand the limits, meanings and forms of eroticism and sexual desire in a society educated with mainstream porn and in a city where fetishism is on the commercial agenda.</p>

                    </>}
                    videoYoutube=''
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

export default Film
