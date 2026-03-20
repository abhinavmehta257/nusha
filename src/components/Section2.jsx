import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Section2() {
//   const notify = () => toast("Wow so easy!");
    
  return (
    <section className='flex flex-col items-center justify-center mt-[112px]'>
        <img className='md:w-[590px] w-[294px]' src="/assets/logo/logo_black.svg" alt="Nusha.Studio Logo" srcset="" />
        <h5 className='md:text-[24px] text-[16px] font-inter text-[#0E0D0F]'>
            Anushka Mukherjee
        </h5>
        <div className='mt-[80px] flex flex-col items-center md:gap-[52px] gap-[48px]'>
            <p className='md:text-[32px] text-[24px] font-inter text-[#131313] flex flex-col items-center text-center'>
                Private enquiries via 
                <a className="font-inter text-[20px] md:text-[32px] underline" href="mailto:correspondence@nusha.studio" target='_blank'>
                    correspondence@nusha.studio
                </a>
            </p>
            <div className='flex gap-6 justify-center'>
                <a target="_blank" href="https://www.instagram.com/nusha.studio/">
                    <img src="/assets/icons/instagram.png" alt="" srcset="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Section2