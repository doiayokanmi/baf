import React from 'react'
import Image from 'next/image'

interface dataProps {
  description: string;
  image: string;
}

const PhotoCard = ({image, description}: dataProps) => {
  return (
    <>
    <div className="basis-1/3 lg:p-2 py-2 lg:first:ps-0 lg:pe-0">
        <div className='h-[250px] relative overflow-hidden'>
            <Image src={image} width={500} height={250} alt='' />
            <div className="absolute capitalize w-full flex items-center h-[70px] p-2 bottom-0 text-center text-white bg-secondary">
                {description}
            </div>
        </div>
    </div>
    </>
  )
}

export default PhotoCard