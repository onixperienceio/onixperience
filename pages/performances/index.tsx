import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'


const Performances: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen un001'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" max-h-[75vh] mx-4">
                <ProjectsHeader/>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-10 pt-10'>
                    <ProjectPreview
                        title='TRANCE4MATION 94.2 FTM Radio'
                        category='performance'
                        year='2022-23'
                        image='trance4mation.jpeg'
                    />
                    <ProjectPreview
                        title='HYBRID PLEASURES'
                        category='performance'
                        year='2022'
                        image='hybrid.jpg'
                    />
                    <ProjectPreview
                        title='KUFA EROTIK'
                        category='performance'
                        year='2021'
                        image='kufa.jpg'
                    />
                    <ProjectPreview
                        title='REDDISH FOAM'
                        category='performance'
                        year='2021'
                        image='reddishfoam.jpg'
                    />
                    <ProjectPreview
                        title='TRANSMUTATE'
                        category='performance'
                        year='2019'
                        image='transmutar.jpg'
                    />
                    <ProjectPreview
                        title='IF I COULD JUST 
                        NOT FORGET'
                        category='performance'
                        year='2018-19'
                        image='notforget.jpg'
                    />
                    <ProjectPreview
                        title='IF YOU LOVE ME LOVE ME TRANS'
                        category='performance'
                        year='2018-19'
                        image='lovemetrans.jpg'
                    />
                    <ProjectPreview
                        title='LES QUIENES'
                        category='performance'
                        year='2019'
                        image='lesquienes.jpg'
                    />
                    <ProjectPreview
                        title='SISTERE'
                        category='performance'
                        year='2020'
                        image='sistere.jpg'
                    />
                    <ProjectPreview
                        title='ORAL TRANSMISSION'
                        category='performance'
                        year='2020'
                        image='transmisionoral.png'
                    />
                    <ProjectPreview
                        title='HOW CAN I DESIRE THIS SO HARD'
                        category='performance'
                        year='2019'
                        image='desirethis.jpg'
                    />
                    <ProjectPreview
                        title='OPTICAL INSTRUMENT'
                        category='performance'
                        year='2019'
                        image='io.jpeg'
                    />
                    <ProjectPreview
                        title='FUCK ME'
                        category='performance'
                        year='2020'
                        image='fuckme.jpeg'
                    />
                    <ProjectPreview
                        title='ON THE HUNT OF TORKJUAH'
                        category='performance'
                        year='2017'
                        image='alacaza.jpg'
                    />
                </div>
            </main>
        </div>
    )
}

export default Performances
