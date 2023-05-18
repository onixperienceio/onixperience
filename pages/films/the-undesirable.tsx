import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'undesirables'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pb-16">
                <ProjectPage
                    title='the undesirable'
                    category={`film`}
                    year={`2021`}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>How deep is what you desire? How deep is what you long for? To see the woman of your dreams dancing the 60s swing with a knife in her hand, maybe that's paradise
                    <div className='relative sm:h-[80vh] h-[50vh] w-[100%] md:my-10 pb-20'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6K9hJZbhvd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
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

export default Film
