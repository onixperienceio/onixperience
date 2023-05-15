import Head from 'next/head'
import { ProjectsHeader } from '../components/ProjectsHeader'

export const Page  = ({content}) => {

    return (
            <main className="sm:mt-20 mt-40 mx-4">
                <ProjectsHeader/>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-11 pt-10'>
                    {content}
                </div>
            </main>
    )
}
