import React from 'react'
import shiningline from "../assets/shining.png";

const About = () => {
    return (
        <div id="about" className='flex flex-col items-center justify-center pt-[156px]'>
            <div className='chip'>
                <img src={shiningline} height={18} width={18} />
                <p>Let's start</p>
            </div>
            <p className='text-[40px] font-bold tracking-wide mb-10'>About Me</p>
            <div className='text-justify text-lg tracking-[1.2px] opacity-60 gap-4 flex flex-col'>
                <p>
                    Dr. Om Prakash Verma is currently serving as Assistant Professor in the Department of Instrumentation and Control Engineering, Dr B R Ambedkar NIT Jalandhar. He holds a PhD (IIT Roorkee), M.Tech (Dr B R Ambedkar NIT Jalandhar) and B.Tech (Dr B R Ambedkar University, Agra) respectively. Prior to joining NITJ, he was associated with KIIT deemed to be University, Bhubaneswar; Bansthali Vidyapith, Rajasthan; and Graphic Era University, Dehradun. His research interests includes:  Process Design and Integration for Energy Efficiency; Linear and Nonlinear Dynamical Control System; Optimal, Adaptive and Robust Control; Soft Computing & Optimization Techniques; Machine/Deep/Quantum Learning; Machine/Computer Vision; UAV Autonomous Navigation System
                </p>
                <p>
                    He has credit for publishing more than 90+ research publications including international peer-reviewed SCI journals, patent applications, edited books, conferences and book chapters. He has credit to author the book titled Butterfly Optimization Algorithm: Theory and Engineering Applications, published by Springer, and edited 7 different renowned book of International conference proceedings which are published by Springer Nature. He has associated with 05 research projects as PI and Co-PI funded by various funding agencies of cumulative amount 89.26 Crore. He has supervised 1 Ph.D and currently supervising 3 Ph.D (2 Regular and 1 Part time).
                </p>
                <p>
                    He is a Senior Member of IEEE, and Member of IEEE Computational Intelligence Society, IEEE Control Systems Society, Automatic Control and Dynamic Optimization Society (ACDOS) and life time member of other international renowned societies: Instrument Society of India (ISOI) and STEM Research Society (STEM-RS). He is an associate editor of the International Journal of Security and Privacy in Pervasive Computing (IJSPPC) (SCIE and SCOPUS Indexed). He is an Editorial Review Board Member on Mechanical and Mechatronics Engineering, World Academy of Science, Engineering and Technology, USA. He is one of the founder member and secretary of SoCTA, CAMSE and RAiSE international conference series. He has been an invited as a Chief Guest, Keynote Speaker, Guest, and Session’s Chair in several national and International reputed conferences, Short Term Courses and Workshops and also organizing several conference series with reputed publication partner Elsevier and Springer Nature.
                </p>
            </div>
        </div>
    )
}

export default About