import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'not-forget'

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
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Beatriz meets Yuna, or Yuna meets Beatriz. Yuna has a mental breakdown after the death of her smaller brother and Beatriz is there for her, but her family won&apos;t accept her. Crush, love and a cataract of orgasms. If they took out your soul and put it back again, would that be love?

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
