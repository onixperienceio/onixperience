import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'indeseables'
    const category = 'film'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='the undesirable'
                    subtitle='short film'
                    year={`2021`}
                    opening=''
                    category={category}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        How deep is what you desire? How deep is what you long for? To see the woman of your dreams dancing the 60s swing with a knife in her hand, maybe that&apos;s paradise
                    </>}
                    credits={<>
                        EXECUTIVE PRODUCER & CHOREOGRAPHY BY ONIX-Victoria Momeño<br />
                        DIRECTED BY Ángela Amarilla & Maximiliano Trionfante<br />
                        PERFORMED BY Guadalupe Sanz, Guido Veneroni, Horacio Pieroni<br />
                        EDITED BY Maximiliano Trionfante<br />
                        SCRIPT BY Ángela Amarilla & Maximiliano Trionfante<br />
                        BASED IN The Play “Alien Love” by Ángela Amarilla<br />
                        ART DIRECTION BY Victoria Carel<br />
                        PHOTOGRAPHY DIRECTION BY Pablo Lozano<br />
                        ASSISTANCE BY Paula Menga<br />
                        COREOGRAPHY COLLABORATION BY Carla Di Grazia<br />
                        COSTUMES BY Catalina di Primio<br />
                        FX MAKE UP BY Victor Krueger<br />
                        COLOUR BY Bruno Noaro<br />
                        VFX BY Guido Ferraro<br />
                        SOUND BY Gastón Ibarroule & Facundo Paco Giron<br />
                        TRANSLATION BY Ezequiel Zaidenwerg<br />
                        THANKS TO Alejandro Casagrande<br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/yPAgKpak1Dg'
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
