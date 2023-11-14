import React from 'react'
import Image from 'next/image'

const PhotoCard = () => {
  return (
    <>
    <div className="basis-1/3 relative lg:p-2 py-2  lg:first:ps-0 lg:pe-0">
        <div className='h-[250px] overflow-hidden'>
            <Image src={'/image/omoluabi.png'} width={500} height={250} alt='' />
            <div className="absolute p-2 bottom-0 text-center text-white bg-overlay">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, ab.
            </div>
        </div>
    </div>
    </>
  )
}

export default PhotoCard