import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'


const ZipCortex: NextPage = () => {
    const images = [''];
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
                    title=''
                    subtitle = ''
                    year=''
                    opening=''
                    category={``}
                    imageCover=''
                    description=''
                    credits=''
                    videoYoutube=''
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
