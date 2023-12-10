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
                <img src={courset} height={508} />
            </div>
            <div className='px-24 py-20 text-white'>
                <div className='flex gap-5 font-medium'>
                    {chips.map((chip, index) => (
                        <div key={index} className='chip'>{chip}</div>
                    ))}
                </div>

                <div>
                    {courses.map((course, index) => (
                        <a key={index} href={course.link}>
                            <img src={course.thumbnail} height={360} width={480} alt="thumbnail" />
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Courses