import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {


    return (
        <div className='flex flex-col justify-around h-screen min-h-screen'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <div>ONIX</div>
            </main>
        </div>
    )
}

export default Home
