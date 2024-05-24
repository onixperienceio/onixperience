import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectPage from '../../components/ProjectPage';
import { ImageGallery } from '../../components/ImageGallery';
import Credits from '../../components/Credits';

const Performance: NextPage = () => {
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  const carpeta = 'fantasias-recurrentes';
  const category = 'performance';

  const credits = [
    ['CREDITS', ''],
    ['PRODUCED & CURATED  BY', 'ONIX- Victoria Momeño'],
    ['CONCEPT BY', 'Camilo Desorden, Fermin Dublo & Victoria Momeño'],
    ['ARTWORK BY', 'Maximiliano Trionfante & Gugui'],
    ['THANKS TO', 'Dj Pendejo, Genesis Victoria, Luxifera'],
  ];

  return (
    <div className="projects-container">
      <Head>
        <title>ONIX</title>
        <meta name="description" content="ONIX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <ProjectPage
          title="fantasias recurrentes"
          subtitle="Sonic Performance"
          year={2023}
          opening={
            <>
              2023 Wilde Möhre Festival / Berlin, Germany <br />
              2023 Hôsek Contemporary /Berlin, Germany <br />
              2023 Sameheads/ Berlin, Germany <br />
              2023 Grüni /Berlin, Germany <br />
            </>
          }
          category={category}
          imageCover={`/${carpeta}/portada.jpg`}
          description={
            <>
              Recurrent Fantasies is a series of events aimed at showcasing Latin American musicians, whether they reside in Berlin or not. It serves as a platform for meeting, reflecting, and sharing Latin music and dance. Focusing on Latin rhythms such as trap, cumbia, reggaeton, RKT, and hyperpop, Recurrent Fantasies provides opportunities for both emerging and established artists.
              <br />
              <br />
              This decolonial platform is not driven by economic goals but rather by the desire to bring elements of our latin musical culture to the city of Berlin.
            </>
          }
          credits={<Credits credits={credits} />}
        />
        <ImageGallery images={images} folder={carpeta} />
      </main>
    </div>
  );
};

export default Performance;
