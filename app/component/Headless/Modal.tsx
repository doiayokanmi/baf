import { convertDate } from '@/util';
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react'

interface Block {
  _type: string;
  children: { text: string }[];
}

export default function Modal({
  isOpen,
  closeModal,
  title,
  image,
  description,
  date
}: {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  date: string;
  description: Block[];
  image: Array<{
    url: string;
    metadata: {
      caption: string;
    };
  }>;
}) {

  const newDate = convertDate(date);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full lg:px-24 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg capitalize font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 flex-wrap flex-col overflow-x-hidden space-y-2 flex w-full">
                    <p className="text-sm text-gray-500">{newDate}</p>

                    {description.map((block, index) => {
                  switch (block._type) {
                    case 'block':
                      return (
                        <p key={index} className='py-2 font-semibold'>
                          {block.children.map((child) => child.text).join(' ')}
                        </p>
                      );
                   
                    default:
                      return null;
                  }
                })}

                    <h3 className="font-bold py-2 border-b border-primary">More pictures about the project</h3>
                    <div className="flex flex-col space-y-2 space-x-2 lg:flex-row justify-between">
                      {
                        image.map((images, index)=>(
                          <Image src={images.url} key={index} width={350} height={250} alt={images.metadata.caption} />
                        ))
                      }
                    </div>
                  </div>

                  <div className="absolute p-2 bg-primary cursor-pointer rounded-full right-2 top-2 text-white">
                    <X size={24} onClick={closeModal} />
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
