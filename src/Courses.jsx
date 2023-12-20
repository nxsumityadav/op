import React from 'react'
import courset from "./assets/courses.png";
import Layout from './components/layout';

const chips = ["ALI", "EMI", "SP", "Session"];
const courses = [
    {
        thumbnail: "Image Address",
        link: "Image Link",
    }
]

const Courses = () => {
    return (
        <Layout>
            <div>
                <img src={courset} className='h-[400px] md:h-[508px] w-full' />
            </div>
            <div className='px-24 py-20 text-white'>
                <div className='text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row gap-5 w-fit font-medium'>
                    {chips.map((chip, index) => (
                        <div key={index} className='chip'>{chip}</div>
                    ))}
                </div>

                <div>
                    {courses.map((course, index) => (
                        <a key={index} href={course.link}>
                            <img src={course.thumbnail} height={360} width={480} alt="thumbnail" className='mt-8' />
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Courses