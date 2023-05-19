import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'


const Performances: NextPage = () => {

    return (
        <div className=''>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="projects-container">
                <ProjectsHeader/>
                <div className='projects'>
                    <Link href="performances/trance4mation"><a >
                        <ProjectPreview
                            title='TRANCE4MATION 94.2 FTM Radio'
                            category='performance'
                            year='2022-23'
                            image='trance4mation/portada.jpeg'
                        />
                    </a></Link>
                    <Link href="performances/hybrid-pleasures"><a >
                        <ProjectPreview
                            title='HYBRID PLEASURES'
                            category='performance'
                            year='2022'
                            image='hybrid-pleasures/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/kufa-erotik"><a >
                        <ProjectPreview
                            title='KUFA EROTIK'
                            category='performance'
                            year='2021'
                            image='kufa-erotik/portada.jpg'
                            />
                    </a></Link>
                    <Link href="performances/reddish-foam"><a >
                        <ProjectPreview
                            title='REDDISH FOAM'
                            category='performance'
                            year='2021'
                            image='reddish-foam/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/transmutate"><a>
                        <ProjectPreview
                            title='TRANSMUTATE'
                            category='performance'
                            year='2019'
                            image='transmutar/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/if-i-could-just-not-forget"><a>
                        <ProjectPreview
                            title='IF I COULD JUST 
                            NOT FORGET'
                            category='performance'
                            year='2018-19'
                            image='not-forget/portada.jpg'
                        />  
                    </a></Link>
                    <Link href="performances/if-you-love-me-love-me-trans"><a>
                        <ProjectPreview
                            title='IF YOU LOVE ME LOVE ME TRANS'
                            category='performance'
                            year='2018-19'
                            image='loveme-trans/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/les-quienes"><a>
                        <ProjectPreview
                            title='LES QUIENES'
                            category='performance'
                            year='2019'
                            image='les-quienes/portada.JPG'
                        />
                    </a></Link>
                    <Link href="performances/sistere"><a>
                        <ProjectPreview
                            title='SISTERE'
                            category='performance'
                            year='2020'
                            image='sistere/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/oral-transmission"><a>
                        <ProjectPreview
                            title='ORAL TRANSMISSION'
                            category='performance'
                            year='2020'
                            image='transmision-oral/portada.png'
                        />
                    </a></Link>
                    <Link href="performances/how-can-i-desire-this-so-hard"><a>
                        <ProjectPreview
                            title='HOW CAN I DESIRE THIS SO HARD'
                            category='performance'
                            year='2019'
                            image='desire-this/portada.jpg'
                        />
                    </a></Link>
                    <Link href="performances/optical-instrument"><a>
                        <ProjectPreview
                            title='OPTICAL INSTRUMENT'
                            category='performance'
                            year='2019'
                            image='io/portada.jpeg'
                        />
                    </a></Link>
                    <Link href="performances/fuck-me"><a>
                        <ProjectPreview
                            title='FUCK ME'
                            category='performance'
                            year='2020'
                            image='fuckme/portada.jpeg'
                        />
                    </a></Link>
                    <Link href="performances/on-the-hunt-of-torkjuah"><a>
                        <ProjectPreview
                            title='ON THE HUNT OF TORKJUAH'
                            category='performance'
                            year='2017'
                            image='la-caza/portada.jpg'
                        />
                    </a></Link>
                </div>
            </main> 
        </div>
    )
}

export default Performances
