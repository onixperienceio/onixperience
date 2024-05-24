import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg'];
    const carpeta = 'cenizas'
    const category = 'film'

    const creditos = [
        ['WRITTEN & DIRECTED BY', 'Gabriela Orlandi'],
        ['PRODUCTION MANAGEMENT BY', 'Matias Orlandi'],
        ['POSTPRODUCTION MANAGEMENT BY', 'Maximiliano Trionfante & Victoria Momeño'],
        ['EDITED BY', 'Maximiliano Trionfante'],
        ['DIRECTOR ASSISTANCE BY', 'Gary Koretzky'],
        ['PHOTOGRAPHY DIRECTION BY', 'Emanuel Sarmiento'],
        ['ART DIRECTION BY', 'Victoria Carel'],
        ['GAFFER', 'Evelyn Denise Pin'],
        ['MAKE UP BY', 'Cecilia Cristaldo'],
        ['COLOUR BY', 'Patricia Batlle'],
        ['VFX BY', 'Guido Ferraro'],
        ['SOUND BY', 'Ignacio Blanco & Gastón Ibarroule'],
        ['THANKS TO', 'Alejandro Casagrande'],
        ['PRODUCED BY', 'NEON REBELS']
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
                    title='Cenizas'
                    subtitle='short film'
                    year={`2024`}
                    opening=''
                    category={category}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        (soon)
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))} 
                    </>}
                    videoYoutube='https://vimeo.com/901850939'
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

export default Film
