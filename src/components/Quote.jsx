import React from 'react'

function Quote({data, handleNewQuote}) {
  return (
    <div className='bg-f-dark-grayish-blue flex flex-col items-center rounded-[15px] pt-[40px] px-[24px] md:pt-[48px] pb-[64px] md:pb-[72px] md:px-[48px] relative max-w-[540px]'>
      <p className='text-f-neon-green text-[11px] tracking-[3.46px] md:text-[13px] font-extrabold md:tracking-[4.09px] '>ADVICE #{data.id}</p>
      <p className='text-f-light-cyan text-[24px] md:text-[28px] font-extrabold tracking-[-0.26px] md:tracking-[-0.3px] mt-[24px] mb-[24px] md:mb-[40px]'>"{data.advice}"</p>
      <picture>
        <source media='(min-width:465px)' srcSet='./images/pattern-divider-desktop.svg'></source>
<img src='./images/pattern-divider-mobile.svg' alt='divider icon'></img>
      </picture>
      <button onClick={handleNewQuote} className='bg-f-neon-green p-[20px] rounded-full absolute   bottom-[-32px] hover:cursor-pointer active:shadow-[0_0_25px_5px_rgba(83,255,170,0.4)]  '>
        <img src='./images/icon-dice.svg' alt='devide icon'></img>
      </button>
    </div>
  )
}

export default Quote