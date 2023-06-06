import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'les-quienes'
    const category = 'performance'

    const creditos = [
        ['', ''],
        ['', ''],
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
                    title='les quienes'
                    subtitle = 'theater'
                    year={`2019`}
                    opening={<>2019 Ricardo Rojas Cultural Center / Buenos Aires, Argentina</>}
                    category={category}
                    imageCover={`${carpeta}/portada.JPG`}
                    description={<>
                        Happy, trans and in love, Liuna, an Indian woman, and Mba&apos;ehory, a Paraguayan drug dealer, love each other. Together they live in their love nest in the villa. Their world is transformed when a “normal” family goes to live in the villa.

                    </>}
                    credits={<>
                        EXECUTIVE PRODUCTION BY Miriam Florencia Amarilla, Oleksandr Oleynykov<br />
                        GENERAL PRODUCTION BY Flor Bardon<br />
                        DIRECTION ASSISTANCE BY ONIX- Victoria Momeño<br />
                        PERFORMED BY José María Gómez Samela, Martin Lerner, Soeli Naveyra, Daniela Ruiz, Melanie Sussi, Facundo Tablar<br />
                        COSTUME DESIGN BY Eliana Guzmán<br />
                        SCENOGRAPHY BY Lola Gullo<br />
                        LIGHT DESIGN BY Marcelo Fernandez<br />
                        SOCIAL MEDIA BY Sabrina Silva<br />
                        PICTURES BY Pablo Gómez Samela<br />
                        COMMUNICATION BY Sabrina Silva<br />
                        PUBLIC RELATIONS BY Flor Bardon<br />
                        AUTHORSHIP AND DIRECTION BY Angela Paula Amarilla<br />

                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}/>
                        ))}
                    </>}
                    videoYoutube='https://www.youtube.com/embed/DxiqUVGrGT4'
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
