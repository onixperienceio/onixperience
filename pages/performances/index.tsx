import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'

const Performances: NextPage = () => {

    const hiddenPerformances = [
        "if-you-love-me-love-me-trans",
        "les-quienes",
        "sistere",
        "oral-transmission",
        "on-the-hunt-of-torkjuah",
        "kufa-erotik",
        "transmutate",
        "if-i-could-just-not-forget"
    ];

    const performances = [
        {
            href: "performances/trance4mation",
            title: 'TRANCE4MATION 94.2 FTM Radio',
            category: 'performance',
            year: '2022-23',
            image: 'trance4mation/portada.jpg'
        },
        {
            href: "performances/hybrid-pleasures",
            title: 'HYBRID PLEASURES',
            category: 'performance',
            year: '2022',
            image: 'hybrid-pleasures/portada.jpg'
        },
        {
            href: "performances/reddish-foam",
            title: 'REDDISH FOAM',
            category: 'performance',
            year: '2021',
            image: 'reddish-foam/portada.jpg'
        },
        {
            href: "performances/fuck-me",
            title: 'FUCK ME',
            category: 'performance',
            year: '2020',
            image: 'fuckme/portada.jpg'
        },
        {
            href: "performances/how-can-i-desire-this-so-hard",
            title: 'HOW CAN I DESIRE THIS SO HARD',
            category: 'performance',
            year: '2019',
            image: 'desire-this/portada.jpg'
        },
        {
            href: "performances/optical-instrument",
            title: 'OPTICAL INSTRUMENT',
            category: 'performance',
            year: '2019',
            image: 'io/portada.jpg'
        },
        {
            href: "performances/hold-for-three",
            title: 'HOLD FOR THREE',
            category: 'performance',
            year: '2023',
            image: 'hold-for-three/portada.jpg'
        }
    ];

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
                    {performances.filter(performance => !hiddenPerformances.includes(performance.href.split('/')[1])).map((performance, index) => (
                        <Link href={performance.href} key={index}>
                            <a>
                                <ProjectPreview
                                    title={performance.title}
                                    category={performance.category}
                                    year={performance.year}
                                    image={performance.image}
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </main> 
        </div>
    )
}

export default Performances

