import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'les-quienes'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='les quienes'
                    subtitle = 'theater'
                    year={`2019`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.JPG`}
                    description={<>
                        Happy, trans and in love, Liuna, an Indian woman, and Mba&apos;ehory, a Paraguayan drug dealer, love each other. Together they live in their love nest in the villa. Their world is transformed when a “normal” family goes to live in the villa.

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
