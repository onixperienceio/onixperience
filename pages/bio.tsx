import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Bio: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen un001'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-[80%] max-h-[80vh] mx-auto ">
                <div className='relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-6 pb-[10%] lg:pb-0'>
                    <div className='relative'>
                        <Image objectFit='cover' layout='fill' src="/images/yo.jpg" alt='yo' />
                    </div>
                    
                    <div className="">                    
                        <p className=''>                           
                            Victoria Momeño- ONIX- is a Berlin-based transmedia storyteller, performer, educator and doctor. Her works explore the intersections between memory and presence, perception and ritual, and the momentary nature of existence. Informed by a combination of influences ranging from her work as a clinical investigator on cognition & catatonia, as pharmacology & theater teacher, as ayurvedic therapist to collaborations with choreographers, digital artists, climate activists and performers, she pulls themes around the latest scientific evidence bringing science and technology to the artistic agenda to question our relationship with the world and the tendency to a programmed era. She works in multiple mediums as an intermedial artist, performer, director, writer, and filmmaker. Her work has been shown in festivals and exhibitions nationally and internationally. For Onix boundaries are illusions invented to keep all the diversity of thought apart.
                        </p>
                        <br />
                        <a href='' className='italic'>Download full CV</a>
                    </div> 
                </div>
            </main>
        </div>
    )
}

export default Bio
