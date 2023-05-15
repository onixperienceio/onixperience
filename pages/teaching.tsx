import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectPreview } from '../components/ProjectPreview'
import { SimpleListItem } from '../components/SimpleListItem'

const Teaching: NextPage = () => {

    return (
        <div className=''>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container">
                <div className='grid grid-cols-1 gap-6 pb-11'>
                    <ProjectPreview
                        title='Theatra'
                        category='workshop'
                        year='2019-23'
                        image='theatra.jpeg'
                    />
                    <p>
                        THEATRA workshop proposes a platform for experimentation to lose the human form, to transition into wild bodies and to become mutant scenes that overflow the territorialization of the theater. We use tools from corporal expression and theater addressing desire as a creative propellant to find other surfaces of vulnerability.
                    </p>
                    <p>
                        An experience that does not represent, but is.
                    </p>
                    <br />
                    <div className=''>
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
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Teaching
