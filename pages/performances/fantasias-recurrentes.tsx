import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'fantasias-recurrentes'
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
                    title='FANTASIAS RECURRENTES'
                    subtitle = 'Sonic Performance Events'
                    year={`2023`}
                    opening={<>
                        2023 Wilde Möhre Festival / Berlin, Germany  <br/>
                        2023 Hôsek Contemporary /Berlin, Germany  <br/>
                        2022 Sameheads/ Berlin, Germany <br/>
                        2022 Gelegenheiten / Berlin, Germany
                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Recurrent Fantasies is a series of events aimed at showcasing Latin American musicians, whether they reside in Berlin or not. It serves as a platform for meeting, reflecting, and sharing Latin music and dance. Focusing on Latin rhythms such as trap, cumbia, reggaeton, RKT, and hyperpop, Recurrent Fantasies provides opportunities for both emerging and established artists. <br />
                       <br />
                        This decolonial platform is not driven by economic goals but rather by the desire to bring elements of our latin musical culture to the city of Berlin.
                    </>}
                    credits={<>
                        <span className='font-bold'>PRODUCED & CURATED BY</span> ONIX-Victoria Momeño<br />
                        <span className='font-bold'>CONCEPT BY</span> Camilo Desorden, Fermin Dublo & Victoria Momeño<br />
                        <span className='font-bold'>ARTWORK BY</span> Maximiliano Trionfante & Gugui<br />
                        <span className='font-bold'>THANKS TO</span> Dj Pendejo, Kayla Celrod, Kim Wichera, Luxifera & Genesis Victoria <br />

                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}
                    </>}
                    videoYoutube=''
                    imagenes= {images.map((image) => (
                        <ImageGallery
                        image={`${category}/${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />
            </main>
        </div>
    )
}

export default Performance 
