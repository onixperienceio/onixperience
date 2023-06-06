import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'transmutar'
    const category = 'performance'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='transmutate'
                    subtitle = 'theater'
                    year={`2019`}
                    opening={<>
                        2019 Feliza Cultural Club / Buenos Aires, Argentina<br />
                        2019 Teatro Popular la Otra Cosa / Buenos Aires, Argentina
                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       Trasmutate invites us to another time where categories and genders do not exist. The play is a collective but deeply intimate journey, where the characters go through vital experiences and questions and put into action other ways of bonding. By staging personal memories and functioning as a reflection of others, it asks ourselves: what is a sense liberated from meaning? Is it possible to compose our bodies in more bodies and intensify their powers to the limit without breaking or destroying themselves?
                    </>}
                    credits={<>
                        WRITTEN, PRODUCED AND DIRECTED BY ONIX-Victoria Momeño<br />
                        PERFORMED BY Renata Matlak, Eva Naxaren Capuano, Helena Pagliere, Tobias Gelbert, Wada Pastorini & Ailin Shanti Brizzi<br />
                        COSTUME DESIGN BY Damasia Arias <br />
                        STYLING BY Chu Riperto<br />
                        SPACE & LIGHT DESIGN BY Julieta Russo<br />
                        SOUND DESIGN BY Sofia Efron<br />
                        VIDEO BY Matías Kedak<br />
                        PHOTOS BY Lucia Crohare<br />
                        DRAMATURGIC COLLABORATION BY Daniela De La Cruz<br />
                        THANKS TO Eme Insua<br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/74xA-1NxIR0'
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${category}/${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />
            </main>
        </div>
    )
}

export default Performance 
