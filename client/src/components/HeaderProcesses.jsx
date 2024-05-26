import React from 'react'

const HeaderProcesses = () => {
  return (
    <div className='w-full h-[20px]  text-white  flex gap-[10px]  '>
        <button className='  px-[14px] py-[12px] ' type='button'> Create Run task</button>
        <button className='  px-[14px] py-[12px] ' disabled="true" type='button'> end task </button>
        <button  className=" px-[14px] py-[12px] " type='button' > Efficiency mode </button>
    </div>
  )
} 
export default HeaderProcesses