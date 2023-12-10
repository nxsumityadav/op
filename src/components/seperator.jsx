import React from 'react'
import shiningline from '../assets/shining-line.png'

const Seperator = () => {
    return (
        <div className='relative'>
            <div className="bg-[#17063B] min-h-[60px] h-[60px]"></div>
            <div className='origin-center -rotate-[6deg] text-[#17063B] bg-white min-h-[60px] h-[60px] font-bold tracking-[1.12px] flex items-center gap-7 overflow-hidden -mt-14'>
                <p>Research</p>
                <img src={shiningline} height={24} width={24} />
                <p>Publication</p>
                <img src={shiningline} height={24} width={24} />
                <p>Books</p>
                <img src={shiningline} height={24} width={24} />
                <p>Project</p>
                <img src={shiningline} height={24} width={24} />
                <p>Thesis</p>
                <img src={shiningline} height={24} width={24} />
                <p>Patent</p>
                <img src={shiningline} height={24} width={24} />
                <p>Books</p>
                <img src={shiningline} height={24} width={24} />
                <p>Journal</p>
                <img src={shiningline} height={24} width={24} />
                <p>Research</p>
                <img src={shiningline} height={24} width={24} />
                <p>Publication</p>
            </div>
        </div>
    )
}

export default Seperator