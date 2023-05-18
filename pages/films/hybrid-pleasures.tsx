import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Contact: NextPage = () => {
    const images = ['hybrid1.jpg', 'hybrid2.jpg', 'hybrid3.jpg', 'hybrid4.jpg'];

    return (
        <div className='container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pb-16">
                <ProjectPage
                    title='hybrid pleasures'
                    category={`film`}
                    year={`2015`}
                    imageCover={`hybridpleasures.jpg`}
                    description={['In a cyberpunk laboratory, at night, Blumenatrix uses the scientific machinery to explore his body. In another dimension, dwells Onyxen, a human-arachnid creature that only appears to him at certain occasions. But this encounter is different, they will discover pleasure, desire and fantasies for the first time in their life.', <br />, <div className='pb-[2em]'>(Soon)</div>]}
                />

                {/* {images.map((image) => (
                    <div className='image-gallery' key={image}>
                        <img src={`/images/film/${image}`} alt=''/>
                    </div>
                ))} */}
                {images.map((image) => (
                    <ImageGallery
                        image={image}/>
                ))}

               
            </main>
        </div>
    )
}

export default Contact
