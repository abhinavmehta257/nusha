import React from 'react'

function Section1() {
  return (
  <section className='section1-grid mt-6'>
        <div className='bg-[#EBEBEB] px-16 font-prata text-[32px] leading-14 flex items-center justify-center '>
            The work resists immediacy. It does not resolve, reassure, or declare meaning. Attention is required. Interpretation is not guided.
        </div>
        <div className='bg-[#DBDBDB] px-16 gap-14 flex flex-col items-center justify-center'>
          <img src="/assets/section1/section-1-left.png" alt="" srcset="" />
           <p className='font-prata text-[32px] leading-12 text-[#0E0D0F]'>
            Work is released selectively. Further engagement occurs privately.
           </p>
        </div>
    </section>
  )
}

export default Section1