import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'trance4mation'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='TRANCE4MATION 94.2 FTM Radio'
                    subtitle = 'performance'
                    year={`2022-23`}
                    opening={<>
                        2023 Unboxing Pleasures Festival. Burgtheater / Lingen, Germany <br/>
                        2022 Fusion Festival. Kulturkosmos / Berlin, Germany<br/>
                        2022 At.Tension International Theater Festival. Kulturkosmos / Berlin, Germany
                    </>}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpeg`}
                    description={<>
                        Tune into this Drag-King-Quing and Queen-Show for ears, eyes and brain waves! Let this Visual Radio take you off the binary lane into fluid frequencies with dance, lipsync, comedy and rave. Zap through sex-positivity, light-show and pop-culture, slightly confused but always straight into the Hertzzz.
                    </>}
                    credits={<>
                    PRODUCED BY CHAOS URANUS<br />
                    PERFORMED BY ONIX- Victoria Momeño, Blumen Salas, Kï Lane, Cynna Moon, Switch, Lokke Wurm, Julx, Elmer, Sugar PA, <br />
                    ASSISTANCE BY Martax<br />
                    TECHNICAL ASSISTANCE BY Leo <br /><br />
                    
                    <p className='font-italic'>Chaos Uranus is a Berlin based collectivity of transdisciplinary performative practices. A mix between the global north and south that joined together to promote shows that question gender and migrant identity.</p>
                    </>}
                    videoYoutube='https://www.youtube.com/embed/rZ6sxMMMuak'
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
