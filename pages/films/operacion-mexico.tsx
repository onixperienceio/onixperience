import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'operacion-mexico'
    const category = 'film'

    const creditos = [
        ['produced by', 'ONIX- Victoria Momeño, Fernando Sokolowicz, Claudio Corbelli, Lisandro Brebbia'],
        ['executive producer', 'Victoria Aizenstat'],
        ['production manager', 'Victoria Aizenstat'],
        ['co-production', 'Alejo Domínguez'],
        ['DISTRIBUTION', '3C Films Group & Primer Plano Film Group'],
        ['DIRECTED AND WRITTEN BY', 'Leonardo Bechini'],
        ['novel by', 'Rafael Bielsa'],
        ['with', 'Luciano Cáceres, Ximena Fassi, Ludovico Di Santo, Patricio Contreras, Luis Ziembrowski, Héctor Calori, Claudio Rissi, Sergio Surraco, Sergio Boris, Paloma Contreras, Ernesto Larrese'],
        ['DIRECTION OF PHOTOGRAPHY', 'Marcelo Iaccarino'],
        ['ART DIRECTION', 'Marcela Bazzano'],
        ['COSTUME DESIGN', 'Violeta Gauvry'],
        ['ORIGINAL MUSIC', 'Nicolas Bechini'],
    ]

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='operacion mexico, un pacto de amor'
                    subtitle='feature film'
                    year={`2015`}
                    opening=''
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        In a shocked Argentina, in the summer of 1978, the militants of an insurgent organization Edgar Tulio Valenzuela (Tucho) and Raquel Negro (María) with an advanced pregnancy and a young son, are kidnapped by the Armed Forces and taken to the suburbs of Rosario. A high commander of the Argentine Army makes Tucho a proposal that if he complies, he will betray the ideals to which he has dedicated all his life and if he rejects it, he will lose his wife, his son and his new child. María and Tucho make a pact.
                        <div className='font-bold font-italic mt-[1em]'>
                            2016 Best Film Award in the Rellumes Section, 53rd Edition of Gijon&apos;s International Film Festival, Spain.
                        </div>
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}/>
                        ))} 
                    </>}
                    videoYoutube='https://www.youtube.com/embed/6K9hJZbhvd0'
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${category}/${carpeta}/${image}`}
                            key={1}/>
                    ))} 
                />
            </main>
        </div>
    )
}

export default Film 
