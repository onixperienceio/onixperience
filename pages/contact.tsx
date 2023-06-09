import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import { useAppContext } from "../../context/useAppContext"


const Contact: NextPage = () => {

    return (
        <div className='flex flex-col justify-around h-screen min-h-screen'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <div className="flex flex-col flex-wrap items-center">
                    <div className="text-left lg:w-[40%] sm:w-[60%] w-[85%] p-10 bg-background2 drop-shadow-sm rounded-xl">
                        <p className='font-display text-xl text-shadow'>
                            Victoria Momeño - Onix
                        </p>
                        <br />
                        <p>
                            contact@onixperience.io
                        </p>
                        <p>
                            +49 1575 0889802
                        </p>
                        <br />
                        <p className='text-sm'>
                            <a href="https://www.instagram.com/onixperience/ ">instagram</a>&nbsp;|&nbsp;
                            <a href="https://www.linkedin.com/in/victoria-momeno/ ">linkedin</a>&nbsp;
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact
