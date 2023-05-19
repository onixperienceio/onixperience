import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'la-caza'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='ON THE HUNT OF TORKJUAH'
                    subtitle = 'mime'
                    year={`2017`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Tokjuah is the civilizing hero of the Wichí, a native community of South America.<br />
                        A multifaceted and hilarious hero-antihero: Tokjuah is the unbridled protagonist of adventures, misfortunes, triumphs, defeats, mistakes, geniuses, loyalties, cheating; he can be the savior of humanity with one of his actions, or cause great disasters just by whim or negligence. Although he is an anthropomorphic entity, we often see him interact with animals and even become one of them or try to imitate them. &#34;A non-Western way of thinking, with its own patterns and logics&#34;.
                    </>}
                    credits={<>
                        PRODUCED BY Latin American Mime and Body Theater Company<br />
                        IDEA AND DIRECTION BY Alberto Ivern<br />
                        PERFORMED BY ONIX-Victoria Momeño, Joaquin Pedroza, Juan Jose Bustos, Emiliano J.C Vazquez, Santiago Juan Foster, Maria Larrea, Maia Noe Rivadeneira, Florencia Poma, Mauro Cavas.<br />
                        CAMERA BY Carlos Ruiz Monasterio<br />
                        COSTUMES AND MAKE UP BY  Carmen Bustos <br />
                        SOUND BY Leonel Villanueva<br />
                        THANKS TO Victor Hernando, Daniel Berbedez, Cecilia Colombo<br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/sWPDYQiJm4Y'
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
