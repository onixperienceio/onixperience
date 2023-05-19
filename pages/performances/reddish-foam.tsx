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
                    title='reddish foam'
                    subtitle = 'theater'
                    year={`2021`}
                    opening={<>2021 Panke Kultur / Berlin, Germany</>}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Jörg, a German, finds himself in his private bdsm session with Julieta, his Latin dominatrix. But this is not a session like the others, Jörg proposes to try something different, to venture into a cursed history that haunts him in his grandfather&apos;s past. Forbidden fantasies, buried secrets and unspeakable confessions function as the key to a profound reflection on one&apos;s own shadows. Julieta and Jörg will get closer until there is no more place to hide and there, they will discover how much there is that really unites them. A pain, a violence that is lodged in both bodies and that exists beyond all borders.

                    </>}
                    credits={<>
                        PRODUCED BY Orakel33<br />
                        EXECUTIVE PRODUCER AND CHOREOGRAPHY: ONIX- Victoria Momeño<br />
                        PERFORMED BY ONIX-Victoria Momeño & Tobias Gelbert<br />
                        DIRECTED & WRITTEN BY Angela Amarilla<br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/x99iga7gN9s'
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
