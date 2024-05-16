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
            <main>
                <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        pointerEvents: 'none',
                        overflow: 'hidden'
                }}>
                <iframe src="https://player.vimeo.com/video/944843505?h=676b3d6289&autoplay=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"  style={{
                            width: '100vw',
                            height: '56.25vw', // Given a 16:9 aspect ratio, 9/16*100 = 56.25
                            minHeight: '100vh',
                            minWidth: '177.77vh', // Given a 16:9 aspect ratio, 16/9*100 = 177.77
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                          }}
                        title="Onix Show Reel"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js" async></script>
            </main>
        </div>
    )
}

export default Home

