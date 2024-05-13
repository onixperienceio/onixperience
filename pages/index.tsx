import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div className='flex flex-col justify-around h-screen min-h-screen'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex justify-center items-center">
                <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                    <iframe src="https://player.vimeo.com/video/944843505?h=676b3d6289&badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} title="Onix Show Reel"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </main>
        </div>
    )
}

export default Home

