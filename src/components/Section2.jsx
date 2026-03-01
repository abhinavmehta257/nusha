import React from 'react'

function Section2() {
  return (
    <section className='flex flex-col items-center justify-center mt-[112px]'>
        <img className='md:w-[590px] w-[294px]' src="/assets/logo/logo_black.svg" alt="Nusha.Studio Logo" srcset="" />
        <h5 className='text-[24px] font-inter text-[#0E0D0F]'>
            Anushka Mukherjee
        </h5>
        <div className='mt-[80px] flex flex-col items-center md:gap-[52px] gap-[48px]'>
            <p className='md:text-[32px] text-[24px] font-inter text-[#131313]'>
                Private enquiries via email.
            </p>
            <div className='flex gap-6 justify-center'>
                <a target="_blank" href="https://www.instagram.com/nusha.studio/">
                    <img src="/assets/icons/instagram.png" alt="" srcset="" />
                </a>
                <a target="_blank" href="mailto:anushka.mukherjee666@gmail.com">
                    <img src="/assets/icons/email-outline.png" alt="" srcset="" />
                </a>
            </div>
        </div>
        
    </section>
  )
}

export default Section2