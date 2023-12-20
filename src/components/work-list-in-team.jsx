import React from 'react'

const WorkListInTeam = ({ topics, list }) => {

    console.log(topics)

    return (
        <div className='text-white flex flex-col items-start pt-[60px]'>
            <div className='flex flex-col sm:flex-row gap-5'>
                {
                    topics.map((topic, index) => {
                        return (<div key={index} className='chip mb-4 w-fit'>
                            <p className="text-sm lg:text-base">{topic}</p>
                        </div>)
                    })
                }
            </div>
            <ol className='text-sm sm:text-base lg:text-lg list-decimal ml-5 pt-5 tracking-[0.64px] text-[#CAC9CD]'>
                {list.map((item, index) => (
                    <li key={index} className='mb-2'>{item}</li>
                ))}
            </ol>
        </div>
    )
}

export default WorkListInTeam