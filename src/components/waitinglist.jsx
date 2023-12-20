import mail from "../assets/mail.png";

const Waitinglist = () => {
    return (
        <div className='bg-[#0B091A] py-16 px-12 sm:px-16 md:px-20 lg:px-44'>
            <div className='text-white waiting-bg flex flex-col sm:flex-row items-center justify-center gap-[0px] sm:gap-[60px] md:gap-[120px] rounded-2xl px-[2rem] sm:px-0'>
                <img src={mail} height={160} width={175} alt="mail" className="pt-[3rem] sm:pt-0" />
                <div className="flex flex-col py-12 gap-8">
                    <p className="text-[#FFB800] font-bold text-3xl lg:text-4xl leading-[52px]">Join 2000+  more <br /> people in the waitlist</p>
                    <div >
                        <a href="#GoogleDocLink" className="text-base lg:text-lg bg-[#FFB800] px-8 py-2 rounded-3xl">Join the waitlist</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waitinglist