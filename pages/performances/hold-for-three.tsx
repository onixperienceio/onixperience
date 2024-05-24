import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'
import { Credits } from '../../components/Credits'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']; // Add more images as needed
    const carpeta = 'hold-for-three'
    const category = 'performance'

    const creditos = [
        ['INITIAL CONCEPT & PERFORMANCE, OBJECT DESIGN ASSISTANCE BY', 'Lottie Sebes'],
        ['CONCEPT DEVELOPMENT & PERFORMANCE, OBJECT DESIGN ASSISTANCE BY', 'Kayla Celrod'],
        ['ASSISTANCE BY', 'Kayla Celrod'],
        ['OBJECT & SET DESIGN BY', 'Anna Maddalena Cingi'],
        ['SOUND DESIGN BY', 'Aleksander Filipiak'],
        ['DRAMATURGIC COLLABORATION & ACTING COACH BY', 'ONIX-Victoria Momeño'],
        ['GRAPHIC DESIGN BY', 'David Luciani'],
        ['DOCUMENTATION BY', 'Kim Wichera'],
        ['THANKS TO', 'Field Notes Berlin Magazin']
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
                    title='HOLD FOR THREE'
                    subtitle='Sonic Performance'
                    year='2023'
                    opening={<>2023 Hošek Contemporary/ Berlin, Germany</>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        ‘Hold for Three’ is a sonic performance which morphs bodies into machinehood and objects into organs. Kayla Elrod and Lottie Sebes probe the sonic capacities of various bellows, operating them as instruments, extensions and prosthetics.<br />
                        <br />
                        Sonic worlds are built from wheezing breath, creaking hinges, loosening screws, and hot air hissing.<br />
                        <br />
                        Outmoded objects of production are transformed into otherworldly organs, powered by mechanical respiration, a cycle of tension and release. What slips from a hosed mouth on the floor of an old ship?<br />
                        <br />
                        Funded by Neue Initiative Musik<br />
                    </>}
                    credits={<>
                        {creditos.map((credit) => (
                        <Credits
                            role={credit[0]}
                            name={credit[1]}
                            key={credit[1]}/>
                        ))}
                    </>}
                   description={<>
                       Hold for three questions capitalist power structures by forging a nightmarish hallucination, one where labor and productivity reign supreme. This world is infused with eroticism, a kind that is laking in care and intimacy, steered by function and violence. This erotic monstrosity is fueled by machinic desire and the performers are mere tools of some greater force for perpetual operation.<br />
                       As the development of digital technology further entangles itself into our work and everyday lives, Hold For Three reflects on a much longer history of mechanisms which have sought to mimic human capacities, such as the form of bellows simulating the human lung. The piece counters patriarchal, tech-fetishistic music cultures in which absolute control and sleek functionality is paramount, while the body is often rendered invisible and immobile. By imagining new musical uses for outdated technology, the work questions what other possible futures emerge from the human-machine relationship. It wrestles with the narrative of technological ‘progress’ in the context of human labor.<br />
                    <br />
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
