import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Film: NextPage = () => {
    const images = ['2.jpg', '1.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'hybrid-pleasures'
    const category = 'film'

    const creditos = [
        ['produced', 'CC_LAB Collective'],
        ['performed', 'ONIX- Victoria Momeño & Blumen Salas'],
        ['photography direction', 'Tin Welt'],
        ['assistance and vj', 'Hernan Kochman'],
        ['edited', 'Camila Delia & Carolina Iglesias'],
        ['colour', 'Tin Welt']
    ]

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pb-20">
                <ProjectPage
                    title='hybrid pleasures'
                    subtitle={`short film`}
                    year={`2023`}
                    opening={`(SOON)`}
                    category={category}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        In a cyberpunk laboratory, at night, Blumenatrix uses the scientific machinery to explore his body. In another dimension, dwells Onyxen, a human-arachnid creature that only appears to him at certain occasions. But this encounter is different, they will discover pleasure, desire and fantasies for the first time in their life.
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))} 
                        <br />
                        <p className='font-italic'>CC_LAB Collective is a multidisciplinary and performative experimental laboratory based in Berlin, which researches and produces about desire and posthumanism.<br />
                        In search of the political character of the body and desire, it articulates questions about how to expand the limits, meanings and forms of eroticism and sexual desire in a society educated with mainstream porn and in a city where fetishism is on the commercial agenda.</p>

                    </>}
                    videoYoutube=''
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
