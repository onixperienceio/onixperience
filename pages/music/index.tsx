import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { ProjectPage } from '../../components/ProjectPage';
import { Credits } from '../../components/Credits';

const Music: NextPage = () => {
    const carpeta = 'music'; // Folder for images (currently unused)

    const creditos = [
        ['PRODUCED BY', 'Camilo Desorden'],
        ['SONG-WRITER & VOCALS BY', 'ONIX'],
        ['VIDEO BY', 'Max Trionfante'],
    ];

    return (
        <div className="projects-container">
            <Head>
                <title>ONIX - Music</title>
                <meta name="description" content="ONIX Music Section" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title="Music"
                    subtitle=""
                    year=""
                    opening=""
                    category=""
                    imageCover={`${carpeta}/portada.jpg`}
                    description={
                        <>
                            Singer-songwriter presenting a work-in-progress album, Neocity.
                            <br />
                            An album that delves into the many sides of Berlin, a mix of hyperpop with Latin rhythms like cumbia and trap.
                            <br />
                            A celebration of self and yet a journey into the visceral. These openings serve as an exploration of the deeper meanings within the songs:
                            <br />
                            An exploration through the ritual, the sacred and the revelry, the impulsive, embracing the Latin cosmovision of finding joy despite everything.
                        </>
                    }
                    credits={
                        <>
                            {creditos.map((credit) => (
                                <Credits role={credit[0]} name={credit[1]} key={credit[1]} />
                            ))}
                            <br />
                            <p>
                                Shows 2023: Hošek Contemporary, Wilde Möhre Festival, Sameheads, Gelegenheiten.
                            </p>
                        </>
                    }
                    imagenes={
                        <div className="video-container">
                            {/* Vimeo Video Embed */}
                            <iframe
                                src="https://player.vimeo.com/video/944843505?h=676b3d6289&autoplay=0&muted=0&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    maxWidth: '100%',
                                    margin: '0 auto',
                                    display: 'block',
                                }}
                                title="Onix Show Reel"
                            ></iframe>
                        </div>
                    }
                />
            </main>
        </div>
    );
};

export default Music;
