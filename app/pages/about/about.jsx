"use client"

import Title from './Title'
import Picture from './Picture'

const about = () => {
  return (
    <div id='about' className='w-full h-[90vh] sm:h-[50vh] my-0 sm:my-20 relative bg-[#1a1a1a] '>
      <Title />
      <Picture />
    </div>
  )
}

export default about