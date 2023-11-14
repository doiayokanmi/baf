import React from 'react'
import LayoutPage from '../component/LayoutPage'
import PageHead from '../component/PageHead'

const page = () => {
  return (
    <>
    <LayoutPage>
        <PageHead
        title='Speeches by Sen. AbdulFatai Buhari Omotayo'
        bgImage='/image/speeches.png'
        />
    </LayoutPage>
    </>
  )
}

export default page