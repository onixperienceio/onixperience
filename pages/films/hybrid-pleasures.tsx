import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectPage } from '../../components/ProjectPage'
import { Gallery } from 'react-grid-gallery'

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
                    <div className='relative md:h-[80vh] mb-[2em] h-[40vh]'>
                        <Image objectFit='cover' layout='fill' src={`/images/film/${image}`} alt=''/>
                    </div>
                ))} */}
                {images.map((image) => (
                    <div className='image-gallery'>
                        <img src={`/images/film/${image}`} alt=''/>
                    </div>
                ))}

               
            </main>
        </div>
    )
}

export default Contact
