import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'io'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='optical instrument'
                    subtitle = 'music Visual Performance'
                    year={`2019`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpeg`}
                    description={<>
                       I-O is a ceremonial work that invites you to experience sensory and spiritual states. In the show, Josefina Barreix sings in both Spanish and Ranquel, the language of the pre-Columbian peoples from which she descends. The result is a piece with its own magic that refers both to the strength of the ancestral and the mystery of futuristic scenarios.

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
