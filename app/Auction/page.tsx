import NavBar from '@/components/NavBar/NavBar'
import ProgressComponent from '@/components/ProgressComponent'
import React from 'react'

const page = () => {
  return (
      <div className='bg-[#F5F3EF] min-h-screen'>
      <NavBar />
      <div className='container mx-auto px-40'> {/* Added container with padding */}
        <div className='mt-10'>
          <ProgressComponent/>
          {/* Annotated Bibliography Section */}
          <section className='mt-10'>
            <h2 className='text-2xl font-bold'>Annotated Bibliography</h2>
            <p className='mt-4 text-gray-700'>
              An annotated bibliography is a curated list of sources (books, articles, documents, etc.) 
              that includes a brief summary and evaluation of each. The purpose of an annotated bibliography 
              is to showcase research materials with concise, critical, and descriptive notes about their 
              content, relevance, and quality.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page
