import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'loveme-trans'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='if you love me love me trans'
                    subtitle = 'theater'
                    year={`2018-19`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        Is born from improvisations based on the personal stories of each of the members of the company. As a tragicomedy, it tells the story of Brenda and Raul, a young man who despite having received an orthodox education, falls in love with a trans girl and must fight against the prejudices and insecurities of Brenda, who doesn&apos;t want to get hurt and therefore hesitates all the time whether to accept the proposal made by her boyfriend to live together or not.
Joseph, Brenda&apos;s childhood friend, encourages her to fly and tells her to take a chance on his love and Camila, her best friend, forces her to come back to earth with the speech of the past, present and future.
The play is an invitation to reflect on gender roles in our society and the prejudices we may have, born from the fear that comes from trying to be oneself in a society that punishes what is different.


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
