import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'trance4mation'
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
                    title='CHAOS URANUS'
                    subtitle = 'performance'
                    year={`2022-23`}
                    opening={<>
                        2024 Tristeza / Berlin, Germany <br/>
                        2023 Unboxing Pleasures Festival. Burgtheater / Lingen, Germany <br/>
                        2022 Fusion Festival. Kulturkosmos / Berlin, Germany<br/>
                        2022 At.Tension International Theater Festival. Kulturkosmos / Berlin, Germany
                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       A Drag-King-Quing and Queen-Show that take you off the binary lane into fluid frequencies with dance, lipsync, pop-culture and rave.<br/>
                       Chaos Uranus is an open, free and horizontal collectivity of transdisciplinary performative practices.<br/>
                       It arises from the necessity of carrying the revolutionary struggle against capitalist oppression into that territory where the oppression is most
                       deeply rooted: the living body. We explore how to travel into this boundaryless territory, we practice to live in the flux of desires that lie beyond
                       sexuality, beyond the domain of the repertories of normality. We feel the vital need to act as a group in liberating ourselves from those forces
                       that have crushed and controlled desire, gender, and identity, in each of us. What we experience in our intimate life, we try to approach, explore,
                       and question collectively. We want to unblock our bodies, feel them as a whole again, experience all their dimensions, energies, desires and
                       intensities.<br/>
                       We are Chaos Uranus, a mixture between the global south and the global north who came together to impulse affective hybrid knowledge from
                       love and trust. 
                    </>}
                    credits={<>
                    PRODUCED BY CHAOS URANUS<br />
                    PERFORMED BY ONIX- Victoria Momeño, Blumen Salas, Kï Lane, Cynna Moon, Switch, Lokke Wurm, Julx, Elmer, Sugar PA, <br />
                    ASSISTANCE BY Martax<br />
                    TECHNICAL ASSISTANCE BY Leo <br /><br />

                    {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}
                    
                    <p className='font-italic'>Chaos Uranus is a Berlin based collectivity of transdisciplinary performative practices. A mix between the global north and south that joined together to question gender and migrant identity.</p>
                    </>}
                    videoYoutube='https://www.youtube.com/embed/rZ6sxMMMuak'
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
