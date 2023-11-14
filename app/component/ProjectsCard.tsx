'use client'

import React, { useState } from 'react'
import Modal from './Headless/Modal'

const ProjectsCard = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
    <div onClick={openModal}>
        open dialog

        <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
    </>
  )
}

export default ProjectsCard