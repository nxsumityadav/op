import WorkListInTeam from './work-list-in-team'
import { author, journals_2022_sci, journals_2022_scopus, journals_2021_sci, journals_2021_scopus } from './PublicationsConstants'


const Publications = () => {
    return (
        <div className='py-20 text-white'>
            <p className='text-[40px] font-bold tracking-wide mb-5'>Publications</p>
            <WorkListInTeam topics={["Author"]} list={author} />
            <WorkListInTeam topics={["Journals", "2022 (SCI- Indexed)"]} list={journals_2022_sci} />
            <WorkListInTeam topics={["Journals", "2022 (SCOPUS- Indexed)"]} list={journals_2022_scopus} />
            <WorkListInTeam topics={["Journals", "2021 (SCI- Indexed)"]} list={journals_2021_sci} />
            <WorkListInTeam topics={["Journals", "2021 (SCOPUS- Indexed)"]} list={journals_2021_scopus} />
        </div>
    )
}

export default Publications
