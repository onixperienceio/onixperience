import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../components/ProjectsHeader'

const Projects: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen un001'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectsHeader/>
                <div className="flex flex-col flex-wrap items-center md:text-base text-sm">
                    <div className="text-left w-[70%] md:w-[70%] p-3">
                        <p className=''>
                            Projects
                        </p>
                    </div> 
                </div>
            </main>
        </div>
    )
}

export default Projects
