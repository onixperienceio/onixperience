import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Film: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'indeseables'
    const category = 'film'

    const creditos = [
        ['EXECUTIVE PRODUCER & CHOREOGRAPHY BY', 'ONIX-Victoria Momeño'],
        ['DIRECTED BY', 'Ángela Amarilla & Maximiliano Trionfante'],
        ['PERFORMED BY', 'Guadalupe Sanz, Guido Veneroni, Horacio Pieroni'],
        ['EDITED BY', 'Maximiliano Trionfante'],
        ['SCRIPT BY', 'Ángela Amarilla & Maximiliano Trionfante'],
        ['BASED IN', 'The Play “Alien Love” by Ángela Amarilla'],
        ['ART DIRECTION BY', 'Victoria Carel'],
        ['PHOTOGRAPHY DIRECTION BY', 'Pablo Lozano'],
        ['ASSISTANCE BY', 'Paula Menga'],
        ['COREOGRAPHY COLLABORATION BY', 'Carla Di Grazia'],
        ['COSTUMES BY', 'Catalina di Primio'],
        ['FX MAKE UP BY', 'Victor Krueger'],
        ['COLOUR BY', 'Bruno Noaro'],
        ['VFX BY', 'Guido Ferraro'],
        ['SOUND BY', 'Gastón Ibarroule & Facundo Paco Giron'],
        ['TRANSLATION BY', 'Ezequiel Zaidenwerg'],
        ['THANKS TO', 'Alejandro Casagrande']
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
                    title='Undesirable'
                    subtitle='short film'
                    year={`2021`}
                    opening=''
                    category={category}
                    imageCover={`/${carpeta}/portada.jpg`}
                    description={<>
                        A man has been tied up for days. Today he&apos;s not alone, it&apos;s Wednesday. His wounds, dimly visible in the faint light, serve as a painful reminder that he is still alive. How deep can desires drill? Seeing the woman of your dreams swing to a 60s beat, knife in hand—perhaps this is what paradise looks like.
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))} 
                    </>}
                    videoYoutube=''
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
