import React from 'react'

function Section1() {
  return (
  <section className='flex md:flex-row flex-col md:mt-8 mt-[24px] md:h-[720px] font-prata  md:text-[32px] md:leading-14 leading-[32px] text-[24px]'>
        <div className='w-full bg-[#EBEBEB] md:px-16 px-[40px] py-16 font-prata flex flex-col gap-[16px]'>
            <p>The work resists immediacy.</p>
            <p>It does not resolve, reassure, or declare meaning.</p> 
            <p>Attention is required.</p> 
            <p>Interpretation is not guided.</p>
        </div>
        <div className='w-full bg-[#DBDBDB] md:px-16 px-[40px] py-16 gap-14 flex flex-col items-center justify-center font-prata text-[#0E0D0F] text-center'>
          <img srcSet="/assets/section1/section-1-left.png" alt="" />
           <div className='flex flex-col gap-[16px]'>
              <p>Work is released selectively.</p> <p>Further engagement occurs privately.</p>
           </div>
        </div>
    </section>
  )
}

export default Section1