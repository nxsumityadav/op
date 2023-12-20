import { useState } from "react";
import dp from "../assets/dp.png"
import { Link } from 'react-scroll';

const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <div className="navbar h-[86px] fixed w-full bg-[#040117] z-10">
            <div className="flex py-5 text-white items-center justify-between h-[84px] bg-[#040117] px-11 sm:px-16">
                <a href="/">
                    <img src={dp} height={44} width={44} alt="dp" className="border-[1px] border-[#C676FE] rounded-full" />
                </a>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <ul className={`flex flex-col gap-8 border-[1px] border-[#231E37] bg-[#100A27] text-sm sm:text-base py-1 px-5 justify-center rounded-3xl nav-elements md:flex-row  ${showNavbar && "active"}`}>
                    <li className="cursor-pointer translate ease-in-out delay-150 hover:scale-110"><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li className="cursor-pointer translate ease-in-out delay-150 hover:scale-110"><Link to="about" spy={true} smooth={true} duration={600}>About</Link></li>
                    <li className="cursor-pointer translate ease-in-out delay-150 hover:scale-110"><Link to="work-experience" spy={true} smooth={true} duration={700}>Work</Link></li>
                    <li className="cursor-pointer translate ease-in-out delay-150 hover:scale-110"><a href="/courses" target="_blank">Course</a></li>
                    <li className="cursor-pointer translate ease-in-out delay-150 hover:scale-110"><Link to="research" spy={true} smooth={true} duration={800}>Research</Link></li>
                    <a href="../assets/Dr Om Prakash Verma_for Institute.docx" className="md:hidden text-sm sm:text-base rounded-lg border-[1px] border-[#7A52AE] px-4 py-2 bg-[#17063B] text-white font-medium btn" download>Download CV</a>
                </ul>
                <a href="../assets/Dr Om Prakash Verma_for Institute.docx" className="hidden md:block text-sm sm:text-base rounded-lg border-[1px] border-[#7A52AE] px-4 py-2 bg-[#17063B] text-white font-medium btn" download>Download CV</a>
            </div>
        </div>
    )
}

export default Navbar