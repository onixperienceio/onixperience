import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'

const Films: NextPage = () => {

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
                    <a href="/films/operacion-mexico">
                        <ProjectPreview
                            title='Operacion Mexico, un pacto de amor'
                            category='film'
                            year='2015'
                            image='operacion-mexico/portada.jpg'
                            />
                    </a>
                    <a href="/films/hybrid-pleasures">
                        <ProjectPreview
                            title='Hybrid Pleasures'
                            category='film'
                            year='2023'
                            image='hybrid-pleasures/portada.jpg'
                            />
                    </a>
                    <a href="films/the-undesirable">
                        <ProjectPreview
                            title='The Undesirable'
                            category='film'
                            year='2021'
                            image='indeseables/portada.jpg'
                            />
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Films
