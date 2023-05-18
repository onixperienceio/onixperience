import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Contact: NextPage = () => {
    const images = ['Operacion mexico 3.jpg', 'Operacion Mexico 4.jpg', 'Operacion Mexico 6.jpg', 'Operacion Mexico 7.jpg'];

    return (
        <div className='container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pb-16">
                <ProjectPage
                    title='operacion mexico'
                    category={`film`}
                    year={`2015`}
                    imageCover={`Foto1 - portada.jpg`}
                    description={['In a shocked Argentina, in the summer of 1978, the militants of an insurgent organization Edgar Tulio Valenzuela (Tucho) and Raquel Negro (María) with an advanced pregnancy and a young son, are kidnapped by the Armed Forces and taken to the suburbs of Rosario. A high commander of the Argentine Army makes Tucho a proposal that if he complies,  he will betray the ideals to which he has dedicated all his life and if he rejects it, he will lose his wife, his son and his new child. María and Tucho make a pact.',
                    <div className='font-bold font-italic mt-[1em]'>2016 Best Film Award in the Rellumes Section, 53rd Edition of Gijon's International Film Festival, Spain.</div>, <br/>, <br />, <div className='relative sm:h-[80vh] h-[50vh] w-[100%] md:my-10 pb-20'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6K9hJZbhvd0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>]}
                />
                
                {images.map((image) => (
                    <ImageGallery
                        image={image}/>
                ))}

               
            </main>
        </div>
    )
}

export default Contact
