import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPreview } from '../../components/ProjectPreview'
import { SimpleListItem } from '../../components/SimpleListItem'
import { ProjectPage } from '../../components/ProjectPage'
import Link from 'next/link'

const Workshops: NextPage = () => {
    const carpeta = 'theatra'

    return (
        <div className=''>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="projects-container">
                <div className='sm:pt-14 pb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                    <Link href="/workshops/theatra"><a >
                        <ProjectPreview
                            title='Theatra'
                            category='workshop'
                            year='2019-23'
                            image='theatra/portada.jpg'
                            />
                    </a></Link>
                </div>
            </main>
        </div>
    )
}

export default Workshops