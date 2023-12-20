
import shiningline from '../assets/shining.png'
import AcademicQualification from './academic-qualification'
import WorkExperience from './work-experience'
const Academic = () => {
    return (
        <div className='pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden'>
            <div className='chip mb-4'>
                <img src={shiningline} height={18} width={18} />
                <p className="text-sm lg:text-base">Scholastic</p>
            </div>
            <p className='text-3xl lg:text-4xl font-bold tracking-wide mb-10'>Academic</p>
            <WorkExperience />
            <AcademicQualification />
        </div>
    )
}

export default Academic