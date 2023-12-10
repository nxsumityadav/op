import dp from "../assets/dp.png";

const Home = () => {
    return (
        <div id="home" className="px-16">
            <div className="text-white flex flex-col items-center background-image h-[790px]">
                <img src={dp} height={250} width={250} alt="dp" className="py-10" />
                <div className="text-4xl leading-[48px] text-center font-medium pb-5">
                    <p className="text-[#692BE3]">Hello, I’m Dr. OM PRAKASH VERMA</p>
                    <p>Assistant Professor</p>
                </div>
                <div className="text-center text-2xl pb-[]">
                    <p>Department of Instrumentation and Control Engineering,</p>
                    <p>Dr. B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</p>
                </div>
                <div className="pt-6 flex gap-8 items-center">
                    <a href="#about" className="rounded-lg border-[1px] border-[#7A52AE] px-4 py-1 bg-[#17063B] text-white font-medium">View more</a>
                    <a href="mailto:opiitroorkee@gmail.com">Email me</a>
                </div>
            </div>
        </div>
    )
}

export default Home