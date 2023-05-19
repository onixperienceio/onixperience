import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'trance4mation'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='TRANCE4MATION 94.2 FTM Radio'
                    subtitle = 'performance'
                    year={`2022-23`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpeg`}
                    description={<>
                        Tune into this Drag-King-Quing and Queen-Show for ears, eyes and brain waves! Let this Visual Radio take you off the binary lane into fluid frequencies with dance, lipsync, comedy and rave. Zap through sex-positivity, light-show and pop-culture, slightly confused but always straight into the Hertzzz.
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
