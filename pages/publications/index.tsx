import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ProjectsHeader } from '../../components/ProjectsHeader'
import { ProjectPreview } from '../../components/ProjectPreview'


const Publications: NextPage = () => {

    return (
        <div className=''>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="projects-container">
                <ProjectsHeader/>
                <div className='projects'>
                    <div>
                        <ProjectPreview
                            title='CATATONIA AND DELIRIUM ASSESSMENT'
                            category='publication'
                            year='2023'
                            image='paper.png'
                        />
                        <p className='pt-1 text-sm'><a href="https://pubmed.ncbi.nlm.nih.gov/36584250/" target='_blank'>read</a></p>
                    </div>
                    <div>
                        <ProjectPreview
                            title='VEGAN STARTER KIT'
                            category='publication'
                            year='2022'
                            image='vegan.png'
                        />
                        {/* <p className='pt-1 text-sm'>download <a href="/images/publication/PBT Vegan Guide.pdf" download={`PBT Vegan Guide`}>ENG</a> / <a href="/images/publication/Guia Vegana.pdf" download={`Guia Vegana`}>ESP</a></p> */}
                        <p className='pt-1 text-sm'>download <a href="https://drive.google.com/file/d/1pyQGjKg9L38wonriz7AlFgPicc5ONGGb/view">ENG</a> / <a href="https://drive.google.com/file/d/1i6zlEUJp4hGDiP6k2LI7Kg8BeJV1l5fo/view">ESP</a></p>
                    </div>
                    <div>
                        <ProjectPreview
                            title='NUTRITION FOR OUR CHILDREN'
                            category='publication'
                            year='2021'
                            image='nutrition.png'
                        />
                        {/* <p className='pt-1 text-sm'>download <a href="/images/publication/English - Nutrition for our children.pdf" download={`Nutrition for our children`}>ENG</a> / <a href="/images/publication/Nutricion en la ninez.pdf" download={`Nutricion en la ninez`}>ESP</a></p> */}
                        <p className='pt-1 text-sm'>download <a href="https://drive.google.com/file/d/1exAv9ALZGM4f3fRC_GX7NyxaDKzZ3Yln/view">ENG</a> / <a href="https://drive.google.com/file/d/1CkrZzzYWKJNoiA39CyVTDi-z-ZayQONt/view">ESP</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Publications
