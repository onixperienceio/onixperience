import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPreview } from '../../components/ProjectPreview'
import { SimpleListItem } from '../../components/SimpleListItem'
import { ProjectPage } from '../../components/ProjectPage'
import { ImageGallery } from '../../components/ImageGallery'

const Workshop: NextPage = () => {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const carpeta = 'theatra'
    const category = 'workshop'

    return (
        <div className='projects-container'>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <ProjectPage
                    title='theatra'
                    subtitle = 'workshop'
                    year={`2019-23`}
                    opening={<>
                        <SimpleListItem
                            title='Workshop for Festival Unboxing Pleasures'
                            year='2023'
                            place='Lingen, Germany'
                        />
                        <SimpleListItem
                            title='Quarterly Course in Gelgenheiten e.V'
                            year='2022'
                            place='Berlin, Germany'
                        />
                        <SimpleListItem
                            title='Workshop for enterprises for Goxam'
                            year='2022'
                            place='Berlin, Germany'
                        />
                        <SimpleListItem
                            title='Annual Online Course'
                            year='2020'
                            place='Buenos Aires, Argentina'
                        />
                        <SimpleListItem
                            title='Annual Course in Feliza Cultural Center'
                            year='2019'
                            place='Buenos Aires, Argentina'
                        />
                    </>}
                    category={category}
                    imageCover={`${carpeta}/portada.jpg`}
                    description={<>
                       <p className=''>
                         THEATRA workshop proposes a platform for experimentation to lose the human form, to transition into wild bodies and to become mutant scenes that overflow the territorialization of the theater. We use tools from corporal expression and theater addressing desire as a creative propellant to find other surfaces of vulnerability.
                    </p>
                    <br />
                    <p className='font-italic font-bold'>
                         An experience that does not represent, but is.</p>
                    </>}
                    credits=''
                    videoYoutube=''
                    imagenes={images.map((image) => (
                        <ImageGallery
                            image={`${category}/${carpeta}/${image}`}
                            key={image}/>
                    ))} 
                />            
            </main>
        </div>
    )
}

export default Workshop
