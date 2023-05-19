import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'indeseables'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='the undesirables'
                    category={`film`}
                    year={`2021`}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        How deep is what you desire? How deep is what you long for? To see the woman of your dreams dancing the 60s swing with a knife in her hand, maybe that's paradise
                    </>}
                    videoYoutube='https://www.youtube.com/embed/6K9hJZbhvd0'
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

export default Film
