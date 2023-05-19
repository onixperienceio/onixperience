import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'reddish-foam'

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
                    subtitle = 'inmersive performance'
                    year={`2022`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Jörg, a German, finds himself in his private bdsm session with Julieta, his Latin dominatrix. But this is not a session like the others, Jörg proposes to try something different, to venture into a cursed history that haunts him in his grandfather's past. Forbidden fantasies, buried secrets and unspeakable confessions function as the key to a profound reflection on one's own shadows. Julieta and Jörg will get closer until there is no more place to hide and there, they will discover how much there is that really unites them. A pain, a violence that is lodged in both bodies and that exists beyond all borders.

                    </>}
                    videoYoutube='https://www.youtube.com/embed/Is81XHmEG3M'
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
