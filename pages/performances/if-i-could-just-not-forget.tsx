import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'not-forget'
    const category = 'performance'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='IF I COULD JUST NOT FORGET'
                    subtitle = 'inmersive performance'
                    year={`2018-19`}
                    opening={<>
                        2019 12-FIBA, International Theater Festival of Buenos Aires, Argentina<br />
                        2018 Feliza Cultural Center / Buenos Aires, Argentina

                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Beatriz meets Yuna, or Yuna meets Beatriz. Yuna has a mental breakdown after the death of her smaller brother and Beatriz is there for her, but her family won&apos;t accept her. Crush, love and a cataract of orgasms. If they took out your soul and put it back again, would that be love?

                    </>}
                    credits={<>
                        CO-DIRECTION BY: ONIX-Victoria Momeño & Angela Paula Amarilla <br />
                        WRITTEN BY : Angela Paula Amarilla<br />
                        PERFORMED BY: ONIX-Victoria Momeño, Anahi Politi, & Rodrigo Alvarez<br />
                        SOUND DESIGN BY: Federico Turkanski<br />
                        COSTUME DESIGN BY Tebas Land<br />
                        PHOTOS BY Victoria Cozzarín, Milva Scollo & Benjamin Martinez<br />
                        THANKS TO  Ana Baqueriza<br />
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

export default Performance 
