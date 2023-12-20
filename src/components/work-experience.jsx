
const WorkExperience = () => {
    const titles = ["Year", "Department", "Institute Name", "Position"];
    const contents = [
        [
            "11 Jan 2023 - Till date",
            "Department of Instrumentation & Control Engg.",
            "Dr. B R Ambedkar NIT Jalandhar",
            "Assistant Prof",
        ],
        [
            "Aug 2017 - Jan 2018",
            "School of Electronics",
            "KIIT University, Bhubaneswar",
            "Assistant Prof",
        ],
        [
            "July 2017 - Aug 2017",
            "School of Electronics & Instrumentation/Automation/ Mechatronics",
            "Bansthali Vidyapith, Rajasthan",
            "Assistant Prof",
        ],
        [
            "July 2013 - July 2017",
            "Control & Instrumentation Engg.",
            "IIT Roorkee",
            "Research Scholar"
        ],
        [
            "July 2012 - July 2013",
            "Department of Instrumentation & Control Engg.",
            "Graphic Era University, Dehradun",
            "Assistant Prof."
        ],
        [
            "July 2009 - May 2010",
            "Department of ECE",
            "SBIT, Sonepat, Haryana, India",
            "Lecturer"
        ]
    ];
    return (
        <div id="work-experience" className='w-full scroll-smooth'>
            <p className='text-3xl lg:text-4xl font-bold tracking-wide mb-10'>Work Experience</p>
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
                                    <td key={index} className={`px-6 py-2 max-w-[30ch] break-words text-center `}>{data}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WorkExperience