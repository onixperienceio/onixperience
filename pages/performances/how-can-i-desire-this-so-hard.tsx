import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Performance: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carpeta = 'desire-this'
    const category = 'performance'

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
                    opening={<>2019 Laboratory of Action in the Theatrical Complex of Buenos Aires, Argentina</>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                        CPDTE explores what it means to become a contemporary dancer, the demands, the passion and its precipices. CPDTE transits the borders between documentary and fiction, dance and performance, accident and representation. CPDTE is a project by Miguel Valdivieso based on building a work in permanent change like life. A life lived as the work-in-progress of a work that justifies it.
                    </>}
                    credits={<>
                        <span className='font-bold'>WRITTEN, DIRECTED AND PERFORMED BY</span> Miguel Valdivieso<br />
                        <span className='font-bold'>ASSITANCE BY</span> Carolina Berg<br />
                        <span className='font-bold'>DRAMATURGIC COLLABORATION BY</span> ONIX-Victoria Momeño<br />
                         PHOTOS BY Camila Buendia <br />
                    </>}
                    videoYoutube='https://www.youtube.com/embed/122h4BLQ8Qw'
                    imagenes= {images.map((image) => (
                        <ImageGallery
                        image={`${category}/${carpeta}/${image}`}
                            key={image}/>
                    ))}
                />
            </main>
        </div>
    )
}

export default Performance 
