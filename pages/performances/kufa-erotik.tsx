import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = [];
    const carpeta = 'kufa-erotik'

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
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        An invitation to have dinner and watch short post-porn films. But the dinner doesn&apos;t happen normally, suddenly three people start practicing BDSM and two of them will have to lend their bodies as a banquet. The dom serves vegan sushi. The audience will eat only when he rings the bell. An erotic game, between submission, rebellion and deepness.<br />
                        <br />
                        <a href="https://vimeo.com/695692581" className='text-sm font-italic'>Watch teaser on Vimeo</a>
                    </>}
                    credits={<>
                        PRODUCED BY CC_LAB Collective<br />
                        PERFORMED BY ONIX-Victoria Momeño, Blumen Salas & Kiki Ramos.<br />
                        VEGAN SUSHI BY Gugui<br />
                        PHOTOS BY Guxor<br />
                        THANKS TO Candela<br />
                        <br />

                        <p className='font-italic'>CC_LAB Collective is a multidisciplinary and performative experimental laboratory based in Berlin, which researches and produces about desire and posthumanism. In search of the political character of the body and desire, it articulates questions about how to expand the limits, meanings and forms of eroticism and sexual desire in a society educated with mainstream porn and in a city where fetishism is on the commercial agenda.</p>

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

export default Performance 
