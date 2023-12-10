
import shiningline from '../assets/shining.png'
import AcademicQualification from './academic-qualification'
import WorkExperience from './work-experience'
const Academic = () => {
    return (
        <div className='pt-10 pb-20 flex flex-col items-center justify-center overflow-hidden'>
            <div className='chip'>
                <img src={shiningline} height={18} width={18} />
                <p>Scholastic</p>
            </div>
            <p className='text-[40px] font-bold tracking-wide mb-10'>Academic</p>
            <WorkExperience />
            <AcademicQualification />
        </div>
    )
}

export default Academic