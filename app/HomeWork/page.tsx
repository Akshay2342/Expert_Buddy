import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import ProfileCalendar from './ProfileComponent'
import ActiveProjects from './LeftSection'

const page = () => {
  return (
    <>      <NavBar/>
    <div className='px-4'> {/* Added padding to the content */}
      <div className='flex'> {/* Arrange components side by side */}
        <div className='w-3/4'> {/* ActiveProjects takes 3/4 width */}
          <ActiveProjects/>
        </div>
        <div className='w-1/4'> {/* ProfileCalendar takes 1/4 width */}
          <ProfileCalendar/>
        </div>
      </div>
    </div>
    </>

  )
}

export default page
