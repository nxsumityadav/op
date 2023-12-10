import mail from "../assets/mail.png";

const Waitinglist = () => {
    return (
        <div className='bg-[#0B091A] py-16 px-44'>
            <div className='text-white waiting-bg flex items-center justify-center gap-[120px] rounded-2xl'>
                <img src={mail} height={160} width={175} alt="mail" />
                <div className="flex flex-col py-12 gap-8">
                    <p className="text-[#FFB800] font-bold text-[40px] leading-[52px]">Join 2000+  more <br /> people in the waitlist</p>
                    <div >
                        <a href="#GoogleDocLink" className="text-lg bg-[#FFB800] px-8 py-2 rounded-3xl">Join the waitlist</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waitinglist