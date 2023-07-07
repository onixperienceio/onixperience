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
                <div className='flex flex-col lg:flex-row gap-6 pb-11 lg:pb-0'>
                    <div className='relative lg:min-w-[50%]'>
                        <img src="/images/bio1.jpg" alt='' />
                    </div>
                    
                    <div className="">
                        <p>
                            Victoria Momeño- ONIX- is an actress, singer and writer born in Argentina and based in Berlin.
                        </p>
                        <br />
                        <p>
                           Specialized in transmedia storytelling, she has written and acted in theatre and film productions exhibited in national and international festivals. Her works explore the intersections between perception and reality, memory, and presence. 
                        </p>
                        <p>
                            Informed by a combination of influences ranging from her work as a medical doctor, pharmacology and theater teacher, to collaborations with digital artists and climate activists, she brings science and technology to the artistic agenda to question our relationship with the world. 
                        </p>
                        <p>
                            In Berlin, she worked as the creative director for Orakel33 Production, as a theater teacher for GOXAM, and she co-founded the collectives Chaos Uranus and CC_LAB. She is now writing a Series and recording her first EP.
                        </p>
                        <br />
                        <p>                           
                            For Onix boundaries are illusions invented to keep all the diversity of thought apart.
                        </p>
                    </div>
                </div>
                <div className='pt-20 pb-11'>
                    <ListItem
                        title='TITLE'
                        category='CATEGORY'
                        opening='OPENING/EDITION'
                        date='DATE'
                    />
                    <hr />
                    <br />
                    <ListItem
                        title='Catatonia and Delirium Assessment'
                        category='Publication'
                        opening='PubMed, Journal of Psychopharmalogy'
                        date='2023'
                    />
                    <ListItem
                        title='Trance4mation 94.2 Ftm Radio'
                        category='Performance'
                        opening={<>
                            Unboxing Pleasures Festival, Lingen, Germany <br />
                            Fusion Festival, Berlin, Germany <br />
                            At.Tension International Theater Festival, Berlin, Germany</>}
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
                        opening={<>
                            Feliza Cultural Club, Buenos Aires, Argentina <br />
                            Teatro Popular la Otra Cosa, Buenos Aires, Argentina</>}
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
                        opening={<>
                            Recoleta Cultural Center, Buenos Aires, Argentina <br />
                            La Carpintería Theater, Buenos Aires, Argentina
                        </>}
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
                        opening={<>
                            Le Vent se Lève, Paris, France <br />
                            Loophole, Berlin, Germany</>}
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
