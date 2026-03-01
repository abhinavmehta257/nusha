import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='flex justify-center'>
        {/* <div className="w-full md:h-158 h-[214px] bg-[url('/assets/hero/nusha-studio-art.png')] bg-cover bg-center" /> */}
        <div style={{ width: '100%', position: 'relative', aspectRatio: '343/214' }}>
          <Image
            src="/assets/hero/nusha-studio-art.png"
            alt="Hero Image"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
        </div>
    </section>
  )
}

export default Hero