
const AcademicQualification = () => {
    const titles = ["Year", "Degree", "Subject", "Board"];
    const contents = [
        [
            "2013-2017",
            "Ph. D",
            "Control & Instrumentation Discipline, Department of Polymer and Process Engineering",
            "IIT Roorkee",
        ],
        [
            "2010-2012",
            "M.Tech",
            "Instrumentation & Control",
            "NIT Jalandhar",
        ],
        [
            "2004-2008",
            "B. E.",
            "Electronics & Instrumentation",
            "IET Agra",
        ],
    ];
    return (
        <div className='w-full pt-10'>
            <p className='text-3xl lg:text-4xl font-bold tracking-wide mb-10'>Academic Qualification</p>
            <div className="overflow-scroll md:overflow-hidden">
                <table className="text-sm sm:text-base lg:text-lg">
                    <thead className="bg-[#17063B]">
                        <tr className="border-[1px] border-[#C676FE] rounded-t-lg bg-[#17063B] ">
                            {titles.map((title, index) => (
                                <th key={index} className='px-6 py-2 tracking-[0.96px]'>{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {contents.map((content, index) => (
                            <tr key={index} className={`border-b-[1px] border-x-[1px] ${index === contents?.length - 1 ? 'rounded-b-lg' : ''} border-[#C676FE] h-20`}>
                                {content.map((data, index) => (
                                    <td key={index} className={`px-6 py-2 max-w-[60ch] break-words text-center `}>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AcademicQualification