import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['2.jpg', '1.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'hybrid-pleasures'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='hybrid pleasures'
                    category={`film`}
                    year={`2015`}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        In a cyberpunk laboratory, at night, Blumenatrix uses the scientific machinery to explore his body. In another dimension, dwells Onyxen, a human-arachnid creature that only appears to him at certain occasions. But this encounter is different, they will discover pleasure, desire and fantasies for the first time in their life.
                        <br />
                        <div className='pb-[2em]'>
                            (Soon)
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
