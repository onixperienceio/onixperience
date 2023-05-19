import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'desire-this'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='HOW CAN I DESIRE THIS SO HARD (CPDTE)'
                    subtitle = 'theater'
                    year={`2019`}
                    opening={'Reiche ProjektHaus/ Berlin, Germany'}
                    category={`performance`}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        CPDTE explores what it means to become a contemporary dancer, the demands, the passion and its precipices. CPDTE transits the borders between documentary and fiction, dance and performance, accident and representation. CPDTE is a project by Miguel Valdivieso based on building a work in permanent change like life. A life lived as the work-in-progress of a work that justifies it.
                    </>}
                    credits={<>
                        WRITTEN, DIRECTED AND PERFORMED BY Miguel Valdivieso<br />
                        ASSITANCE BY Carolina Berg<br />
                        DRAMATURGIC COLLABORATION BY ONIX-Victoria Momeño<br />
                        PHOTOS BY Camila Buendia <br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/122h4BLQ8Qw'
                />
                
                {images.map((image) => (
                    <ImageGallery
                    image={`${carpeta}/${image}`}
                        key={1}/>
                ))}

               
            </main>
        </div>
    )
}

export default Performance 