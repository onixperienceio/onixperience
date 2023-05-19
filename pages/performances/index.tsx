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
                    <a href="performances/trance4mation">
                        <ProjectPreview
                            title='TRANCE4MATION 94.2 FTM Radio'
                            category='performance'
                            year='2022-23'
                            image='trance4mation/portada.jpeg'
                        />
                    </a>
                    <a href="performances/hybrid-pleasures">
                        <ProjectPreview
                            title='HYBRID PLEASURES'
                            category='performance'
                            year='2022'
                            image='hybrid-pleasures/portada.jpg'
                        />
                    </a>
                    <a href="performances/kufa-erotik">
                        <ProjectPreview
                            title='KUFA EROTIK'
                            category='performance'
                            year='2021'
                            image='kufa-erotik/portada.jpg'
                            />
                    </a>
                    <a href="performances/reddish-foam">
                        <ProjectPreview
                            title='REDDISH FOAM'
                            category='performance'
                            year='2021'
                            image='reddish-foam/portada.jpg'
                        />
                    </a>
                    <a href="performances/transmutate">
                        <ProjectPreview
                            title='TRANSMUTATE'
                            category='performance'
                            year='2019'
                            image='transmutar/portada.jpg'
                        />
                    </a>
                    <a href="performances/if-i-could-just-not-forget">
                        <ProjectPreview
                            title='IF I COULD JUST 
                            NOT FORGET'
                            category='performance'
                            year='2018-19'
                            image='not-forget/portada.jpg'
                        />  
                    </a>
                    <a href="performances/if-you-love-me-love-me-trans">
                        <ProjectPreview
                            title='IF YOU LOVE ME LOVE ME TRANS'
                            category='performance'
                            year='2018-19'
                            image='loveme-trans/portada.jpg'
                        />
                    </a>
                    <a href="performances/les-quienes">
                        <ProjectPreview
                            title='LES QUIENES'
                            category='performance'
                            year='2019'
                            image='les-quienes/portada.jpg'
                        />
                    </a>
                    <a href="performances/sistere">
                        <ProjectPreview
                            title='SISTERE'
                            category='performance'
                            year='2020'
                            image='sistere/portada.jpg'
                        />
                    </a>
                    <a href="performances/oral-transmission">
                        <ProjectPreview
                            title='ORAL TRANSMISSION'
                            category='performance'
                            year='2020'
                            image='transmision-oral/portada.png'
                        />
                    </a>
                    <a href="performances/how-can-i-desire-this-so-hard">
                        <ProjectPreview
                            title='HOW CAN I DESIRE THIS SO HARD'
                            category='performance'
                            year='2019'
                            image='desire-this/portada.jpg'
                        />
                    </a>
                    <a href="performances/optical-instrument">
                        <ProjectPreview
                            title='OPTICAL INSTRUMENT'
                            category='performance'
                            year='2019'
                            image='io/portada.jpeg'
                        />
                    </a>
                    <a href="performances/fuck-me">
                        <ProjectPreview
                            title='FUCK ME'
                            category='performance'
                            year='2020'
                            image='fuckme/portada.jpeg'
                        />
                    </a>
                    <a href="performances/on-the-hunt-of-torkjuah">
                        <ProjectPreview
                            title='ON THE HUNT OF TORKJUAH'
                            category='performance'
                            year='2017'
                            image='la-caza/portada.jpg'
                        />
                    </a>
                </div>
            </main> 
        </div>
    )
}

export default Performances
