import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'


const Publications: NextPage = () => {

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
                        title='CATATONIA AND DELIRIUM ASSESSMENT'
                        category='publication'
                        year='2023'
                        image='Foto1 - portada.jpg'
                    />
                    <ProjectPreview
                        title='VEGAN STARTER KIT'
                        category='publication'
                        year='2022'
                        image='hybridpleasures.jpg'
                    />
                    <ProjectPreview
                        title='NUTRITION FOR OUR CHILDREN'
                        category='publication'
                        year='2021'
                        image='undesirable.jpg'
                    />
                </div>
            </main>
        </div>
    )
}

export default Publications
