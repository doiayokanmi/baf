'use client'

import Image from 'next/image'
import Navbar from './component/Navbar'

export default function Home() {
  return (
    <>
    <main className='relative overflow-x-hidden'>
    <Navbar />
      <div className="relative">
      <Image src="/image/omoluabi.jpg" width={1480} height={200} alt="logo" />

      <div className="lg:absolute bottom-8 lg:px-24 p-4 text-white font-bold text-sm lg:text-lg w-full text-center uppercase bg-primary">
        Senator Abdul-Fatai and his leader Senator Ademola Ajumobi Abiola.
      </div>
      </div>
    </main>
    </>
  )
}
