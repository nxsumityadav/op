import WorkListInTeam from './work-list-in-team'
import { sponsored_Projects, phd, mtech, btech } from './ResearchConstants'


const ResearchAndProjects = () => {
    return (
        <div id="research" className='pb-20 text-white'>
            <p className='text-3xl lg:text-4xl font-bold tracking-wide mb-5'>My Research  Team  & Projects</p>
            <WorkListInTeam topics={["Sponsored Projects"]} list={sponsored_Projects} />
            <WorkListInTeam topics={["Ph. D"]} list={phd} />
            <WorkListInTeam topics={["M.Tech"]} list={mtech} />
            <WorkListInTeam topics={["B.Tech"]} list={btech} />
        </div>
    )
}

export default ResearchAndProjects
