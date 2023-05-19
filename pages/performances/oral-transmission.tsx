import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'oral-transmission'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='oral transmission'
                    subtitle = 'performance'
                    year={`2020`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.png`}
                    description={<>
                        Oral transmission explores the powerful, fascinating and dangerous aspects of kissing in public with more than 50 performers kissing at the same time. The street as a place to build new social imaginaries. There, every kiss is a political act.


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
