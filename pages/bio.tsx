import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ListItem } from '../components/ListItem'

const Bio: NextPage = () => {

    return (
        <div className=''>
            <Head>
            <title>ONIX</title>
            <meta name="description" content="ONIX" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container'>
                <div className='grid grid-cols-1 gap-6 pb-11 md:grid-cols-2 grid-rows-2 md:grid-rows-1 lg:pb-0'>
                    <div className='relative'>
                        <Image objectFit='cover' layout='fill' src="/images/yo.jpg" alt='yo' />
                    </div>
                    
                    <div className="">                    
                        <p className=''>                           
                            Victoria Momeño- ONIX- is a Berlin-based transmedia storyteller, performer, educator and doctor. Her works explore the intersections between memory and presence, perception and ritual, and the momentary nature of existence. Informed by a combination of influences ranging from her work as a clinical investigator on cognition & catatonia, as pharmacology & theater teacher, as ayurvedic therapist to collaborations with choreographers, digital artists, climate activists and performers, she pulls themes around the latest scientific evidence bringing science and technology to the artistic agenda to question our relationship with the world and the tendency to a programmed era. She works in multiple mediums as an intermedial artist, performer, director, writer, and filmmaker. Her work has been shown in festivals and exhibitions nationally and internationally. For Onix boundaries are illusions invented to keep all the diversity of thought apart.
                        </p>
                    </div>
                </div>
                <div className='pt-6 pb-11'>
                    <ListItem
                        title='TITLE'
                        category='CATEGORY'
                        opening='OPENING/EDITION'
                        date='DATE'
                    />
                    <hr />
                    <ListItem
                        title='Catatonia and Delirium Assessment'
                        category='Publication'
                        opening='PubMed, Journal of Psychopharmalogy'
                        date='2023'
                    />
                    <ListItem
                        title='Trance4mation 94.2 Ftm Radio'
                        category='Performance'
                        opening='Unboxing Pleasures Festival, Lingen, Germany. Fusion Festival, Berlin, Germany
                        At.Tension International Theater Festival,Berlin, Germany'
                        date='2023'
                    />
                    <ListItem
                        title='Hybrid Pleasures'
                        category='Performance'
                        opening='Reiche ProjektHaus, Berlin, Germany'
                        date='2022'
                    />
                    <ListItem
                        title='Vegan Starter Kit'
                        category='Publication'
                        opening='Animal Save Movement, NGO, Canada'
                        date='2022'
                    />
                    <ListItem
                        title='Kufa Erotik'
                        category='Performance'
                        opening='Reiche ProjektHaus, Berlin, Germany'
                        date='2021'
                    />
                    <ListItem
                        title='Reddish Foam'
                        category='Performance'
                        opening='Panke Kultur, Berlin, Germany'
                        date='2021'
                    />
                    <ListItem
                        title='The Undesirable'
                        category='Film'
                        opening='Gelegenheiten, Berlin, Germany'
                        date='2021'
                    />
                    <ListItem
                        title='Nutrition for Our Children'
                        category='Publication'
                        opening='Animal Save Movement, Berlin, Germany'
                        date='2021'
                    />
                    <ListItem
                        title='Zip-Cortex'
                        category='Videoart'
                        opening='Spontaneous Generations in Network, Mexico'
                        date='2020'
                    />
                    <ListItem
                        title='Sistere'
                        category='Performance'
                        opening='Flusslab Residency, Online, Germany'
                        date='2020'
                    />
                    <ListItem
                        title='Oral Transmission'
                        category='Performance'
                        opening='13- International Theater Festival of Buenos Aires, Argentina'
                        date='2020'
                    />
                    <ListItem
                        title='Fuck Me'
                        category='Performance'
                        opening='13- International Theater Festival of Buenos Aires, Argentina'
                        date='2020'
                    />
                    <ListItem
                        title='La Tour de la Colère'
                        category='Film'
                        opening='Vincent Macaigne Artistic Residency, San Martin Cultural Center, Buenos Aires, Argentina'
                        date='2020'
                    />
                    <ListItem
                        title='Trasmutate'
                        category='Performance'
                        opening='Feliza Cultural Club, Buenos Aires, Argentina
                        Teatro Popular la Otra Cosa, Buenos Aires, Argentina'
                        date='2019'
                    />
                    <ListItem
                        title='If I could just not forget'
                        category='Performance'
                        opening='12- International Theater Festival of Buenos Aires, Argentina'
                        date='2019-18'
                    />
                    <ListItem
                        title='If you love me, love me trans'
                        category='Performance'
                        opening='Recoleta Cultural Center, Buenos Aires,Argentina
                        La Carpintería Theater, Buenos Aires,Argentina'
                        date='2019-18'
                    />
                    <ListItem
                        title='Les quienes'
                        category='Performance'
                        opening='Ricardo Rojas Cultural Center, Buenos Aires, Argentina'
                        date='2019'
                    />
                    <ListItem
                        title='Optical Instrument'
                        category='Performance'
                        opening='Le Vent se Lève, Paris, France
                        Loophole, Berlin, Germany'
                        date='2019'
                    />
                    <ListItem
                        title='How can I desire this so hard'
                        category='Performance'
                        opening='Laboratory of Action in the Theatrical Complex of Buenos Aires, Argentina'
                        date='2019'
                    />
                    <ListItem
                        title='Emanate possibilities of encounter'
                        category='Performance'
                        opening='Galpon Face, Buenos Aires, Argentina'
                        date='2018'
                    />
                    <ListItem
                        title='On the hunt for Torkjuah'
                        category='Performance'
                        opening='V Latin American Festival of Mime and Body Theater, Buenos Aires, Argentina'
                        date='2017'
                    />
                    <ListItem
                        title='Operación México, un pacto de amor'
                        category='Film'
                        opening="Best Film Award, 53rd Edition of Gijon's International Film Festival, Spain"
                        date='2015'
                    />
                </div>
            </main>
        </div>
    )
}

export default Bio
