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
                    <ProjectPreview
                        title='Operacion Mexico, un pacto de amor'
                        category='film'
                        year='2015'
                        image='Foto1 - portada.jpg'
                    />
                    <ProjectPreview
                        title='Hybrid Pleasures'
                        category='film'
                        year='2023'
                        image='hybridpleasures.jpg'
                    />
                    <ProjectPreview
                        title='The Undesirable'
                        category='film'
                        year='2021'
                        image='undesirable.jpg'
                    />
                </div>
            </main>
        </div>
    )
}

export default Films
