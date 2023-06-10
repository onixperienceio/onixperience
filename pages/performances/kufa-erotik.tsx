import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'kufa-erotik'
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
                    title='kufa erotik'
                    subtitle = 'inmersive performance'
                    year={`2021`}
                    opening={<>2021 Reiche ProjektHaus / Berlin, Germany</>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        An invitation to have dinner and watch short post-porn films. But the dinner doesn&apos;t happen normally, suddenly three people start practicing BDSM and two of them will have to lend their bodies as a banquet. The dom serves vegan sushi. The audience will eat only when he rings the bell. An erotic game, between submission, rebellion and deepness.<br />
                        <br />
                    </>}
                    credits={<>
                        PRODUCED BY CC_LAB Collective<br />
                        PERFORMED BY ONIX-Victoria Momeño, Blumen Salas & Kiki Ramos.<br />
                        VEGAN SUSHI BY Gugui<br />
                        PHOTOS BY Guxor<br />
                        THANKS TO Candela<br />
                        <br />

                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}

                        <p className='font-italic'>CC_LAB Collective is a multidisciplinary and performative experimental laboratory based in Berlin, which researches and produces about desire and posthumanism. In search of the political character of the body and desire, it articulates questions about how to expand the limits, meanings and forms of eroticism and sexual desire in a society educated with mainstream porn and in a city where fetishism is on the commercial agenda.</p>

                    </>}
                    videoYoutube='https://player.vimeo.com/video/695692581?h=0a9a868f28'
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
