import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'fuckme'
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
                    title='fuck me'
                    subtitle = 'theater'
                    year={`2020`}
                    opening={<>
                        2019 Lecture- KVS / Brussels, Belgium<br />
                        2020 13-FIBA, International Theater Festival of Buenos Aires, Argentina
                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       &#34;I always imagined myself at the center of the scene, as a heroine, taking revenge for everything. But my body wasn&apos;t enough for such a battle. Today I leave my place to the interpreters. I&apos;m going to watch how they lend their bodies to my narcissistic cause&#34;. Marina Otero intends to build an endless work about her life. FUCK ME is the third part of a series that explores the passage of time and the marks that a body holds.
                    </>}
                    credits={<>
                        DRAMATURGY AND DIRECTION BY Marina Otero<br />
                        PERFORMED BY Augusto Chiappe | Juanfra López Bubica | Fred Raposo | Matías Rebossio | Miguel Valdivieso | Cristian Vega | Marina Otero <br />
                        SPACE, LIGHT AND TECHNICAL DIRECTION BY David Seldes | Facundo David <br />
                        SPACE AND LIGHT DESIGN BY Adrián Grimozzi <br />
                        COSTUME DESIGN BY Uriel Cistaro<br />
                        ORIGINAL MUSIC BY Julián Rodríguez Rona <br />
                        DRAMATURGY CONSULTANCY  Martín Flores Cárdenas <br />
                        DIRECTION ASSISTANCE  Lucrecia Pierpaoli<br />
                        CHOREOGRAPHY ASSISTANCE Lucía Giannoni<br />
                        TECHNICAL ASSISTANCE ONIX- Victoria Momeño<br />
                        VIDEO DESIGN  Lucio Bazzalo<br />
                        AUDIOVISUAL TECHNICAL ASSEMBLY  Florencia Labat<br />
                        STYLING BY Chu Riperto<br />
                        PHOTOGRAPHY Matías Kedak<br />
                        COSTUME REALIZATION BY Adriana Baldani <br />
                        EXECUTIVE PRODUCTION BY  Mariano de Mendonça | Marina D ́Lucca <br />
                        PRODUCER Mariano de Mendonça<br />
                        INTERNATIONAL DISTRIBUTION Timbre 4 & Otto Productions<br />

                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}
                    </>}
                    videoYoutube='https://player.vimeo.com/video/667927179?h=84a64146ea'
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

export default Performance 
