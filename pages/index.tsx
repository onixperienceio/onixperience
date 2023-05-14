import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {


    return (
        <div className='flex flex-col justify-around h-screen min-h-screen'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <div>
                <Image objectFit='cover' layout='fill' src='/images/onix3.jpeg' alt=''/>
                </div>
            </main>
        </div>
    )
}

export default Home
