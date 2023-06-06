import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'


const ZipCortex: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'zip-cortex'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='zip-cortex'
                    subtitle = ''
                    year=''
                    opening='(SOON)'
                    category={``}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       <p className=''>
                            A transmedial narrative in progress that includes an Immersive Installation, a Series, a Video Game and a Conference.
                        </p>
                        <br />
                        <p>
                            In a context of climate collapse, the company Heiex wants to upgrade its neuronal implant Zip-Cortex to give the users a happier existence. To this end, Amaya, a Latin American woman who survived the fire on her land, is taken to a brain experiment to recodify her traumatic memory and turn it into a positive experience. But she resists the removal of her trauma. 
                        </p>
                    </>}
                    credits=''
                    videoYoutube='https://www.youtube.com/embed/5PAZo7qTS-Q'
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />            
            </main>
        </div>
        
    )
}

export default ZipCortex
