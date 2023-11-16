import React from 'react'
import Image from 'next/image'

interface dataProps {
  description: string;
  image: string;
}

const PhotoCard = ({image, description}: dataProps) => {
  return (
    <>
    <div className="basis-1/3 relative lg:p-2 py-2 lg:first:ps-0 lg:pe-0">
        <div className='h-[250px] overflow-hidden'>
            <Image src={image} width={500} height={250} alt='' />
            <div className="absolute capitalize w-full max-h-[70px] truncate p-2 bottom-0 text-center text-white bg-secondary">
                {description}
            </div>
        </div>
    </div>
    </>
  )
}

export default PhotoCard