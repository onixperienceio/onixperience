import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'transmision-oral'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='oral transmission'
                    subtitle = 'performance'
                    year={`2020`}
                    opening={<>2020 13-FIBA, International Theater Festival of Buenos Aires, Argentina</>}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.png`}
                    description={<>
                        Oral transmission explores the powerful, fascinating and dangerous aspects of kissing in public with more than 50 performers kissing at the same time. The street as a place to build new social imaginaries. There, every kiss is a political act.


                    </>}
                    credits={<>
                        <p className='font-italic'>
                            This project is the first Staging Workshop of the 13-FIBA, coordinated by Consorcio Feminista & Plataforma LODO. 
                        </p>
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

export default Performance 
