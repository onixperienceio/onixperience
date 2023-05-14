import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'

const Films: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" max-h-[75vh] mx-4">
                <ProjectsHeader/>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-10 pt-10'>
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
