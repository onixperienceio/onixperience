import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import { useAppContext } from "../../context/useAppContext"


const Teaching: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen un001'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <div className="flex flex-col flex-wrap items-center md:text-base text-sm">
                    <div className="text-left w-[70%] md:w-[70%] p-3">
                        <p className=''>
                            Teaching
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Teaching
