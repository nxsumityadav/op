import dp from "../assets/dp.png"
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar h-[86px]">
            <div className="flex py-5 text-white items-center justify-between h-[84px] bg-[#040117] px-16">
                <a href="/">
                    <img src={dp} height={44} width={44} alt="dp" className="border-[1px] border-[#C676FE] rounded-full" />
                </a>
                <div className="flex gap-8 border-[1px] border-[#231E37] bg-[#100A27] py-1 px-5 justify-center rounded-3xl">
                    <div className="cursor-pointer"><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></div>
                    <div className="cursor-pointer"><Link to="about" spy={true} smooth={true} duration={600}>About</Link></div>
                    <div className="cursor-pointer"><Link to="work-experience" spy={true} smooth={true} duration={700}>Work</Link></div>
                    <div><a href="/courses">Course</a></div>
                    <div className="cursor-pointer"><Link to="research" spy={true} smooth={true} duration={800}>Research</Link></div>
                </div>
                <a href="../assets/Dr Om Prakash Verma_for Institute.docx" className="rounded-lg border-[1px] border-[#7A52AE] px-4 py-2 bg-[#17063B] text-white font-medium" download>Download CV</a>
            </div>
        </div>
    )
}

export default Navbar