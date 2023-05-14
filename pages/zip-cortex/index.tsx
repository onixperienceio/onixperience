import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'


const ZipCortex: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen un001'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="sm:max-h-[65vh] max-h-[50vh] mx-4">
                <ProjectsHeader/>
                    <div className='relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-6 pb-10 lg:pb-0'>
                        <div className='relative min-h-[50vh]'>
                            <Image objectFit='cover' layout='fill' src="/../public/images/zip-cortex/ensayo2.png" alt='' />
                        </div>
                        
                        <div className='self-center'>                    
                            <p className=''>
                                Zip-Cortex is a transmedial narrative in progress that includes an Immersive Installation, a Series, a Video Game and a Conference.
                            </p>
                            <br />
                            <p>
                                In a context of climate collapse, the company Heiex wants to upgrade its neuronal implant Zip-Cortex to give the users a happier existence. To this end, Amaya, a Latin American woman who survived the fire on her land, is taken to a brain experiment to recodify her traumatic memory and turn it into a positive experience. But she resists the removal of her trauma. 
                            </p>
                            <br />
                            <p>
                                (soon)
                            </p>
                        </div> 
                    </div>
                    <div className='h-[80vh] w-[100%] md:my-10 mb-10'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5PAZo7qTS-Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className='grid grid-cols-1 h-[100%] pb-10'> 
                        <div className='relative'>
                            <Image objectFit='cover' layout='fill' src="/../public/images/zip-cortex/DSC_2403.jpeg" alt='' />
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default ZipCortex
