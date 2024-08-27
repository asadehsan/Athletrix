import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p> Where Strength Meets Precision</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Athle<span className='text-blue-400'>trix</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'> I pledge to push my boundaries, stay committed to my goals, and embrace the journey of becoming my best <span className='text-blue-400 font-medium'>athletic</span> self. 
        With every workout, I will strive for progress, <span className='text-blue-400 font-medium'>perseverance</span>, and pride in my achievements. I am dedicated to my fitness, 
        my strength, and my well-being.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
