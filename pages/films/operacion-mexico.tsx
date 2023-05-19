import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'operacion-mexico'

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
                    category={`film`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        In a shocked Argentina, in the summer of 1978, the militants of an insurgent organization Edgar Tulio Valenzuela (Tucho) and Raquel Negro (María) with an advanced pregnancy and a young son, are kidnapped by the Armed Forces and taken to the suburbs of Rosario. A high commander of the Argentine Army makes Tucho a proposal that if he complies, he will betray the ideals to which he has dedicated all his life and if he rejects it, he will lose his wife, his son and his new child. María and Tucho make a pact.
                        <div className='font-bold font-italic mt-[1em]'>
                            2016 Best Film Award in the Rellumes Section, 53rd Edition of Gijon&apos;s International Film Festival, Spain.
                        </div>
                        <br /><br />
                    </>}
                    credits={<>
                        PRODUCED BY ONIX- Victoria Momeño, Fernando Sokolowicz, Claudio Corbelli, Lisandro Brebbia<br />
                        EXECUTIVE PRODUCER Victoria Aizenstat<br />
                        PRODUCTION MANAGER Gastón Grazide<br />
                        CO-PRODUCTION Alejo Domínguez<br />
                        DISTRIBUTION 3C Films Group & Primer Plano Film Group<br />
                        DIRECTED AND WRITTEN BY Leonardo Bechini<br />
                        NOVEL BY Rafael Bielsa<br />
                        WITH Luciano Cáceres, Ximena Fassi, Ludovico Di Santo, Patricio Contreras, Luis Ziembrowski, Héctor Calori, Claudio Rissi, Sergio Surraco, Sergio Boris, Paloma Contreras, Ernesto Larrese<br />
                        DIRECTION OF PHOTOGRAPHY Marcelo Iaccarino<br />
                        ART DIRECTION Marcela Bazzano<br />
                        COSTUME DESIGN Violeta Gauvry<br />
                        ORIGINAL MUSIC Nicolas Bechini<br />
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
