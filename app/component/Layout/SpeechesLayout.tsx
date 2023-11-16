import Image from 'next/image'
import React from 'react'

const SpeechesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <section className="lg:px-24 relative justify-between p-4 lg:py-6 mt-8 flex flex-col lg:flex-row">
          <div className="basis-3/4 lg:pe-8">
            
            {children}
            
          </div>
          <div className="basis-1/4">
            <Image src={'/image/omoluabi.png'} width={400} height={300} alt="" />

            <h3 className="font-bold py-4 text-xl uppercase">The man for the job - Omoluabi!!!</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque qui suscipit unde veniam assumenda quae quam totam provident quos culpa doloremque obcaecati quod ipsam, labore ea, modi a ut iste.
            </p>
          </div>
        </section>
    </>
  )
}

export default SpeechesLayout