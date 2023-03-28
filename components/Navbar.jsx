import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className='mx-auto p-4 bg-[#264653]'>
            <div className='flex gap-20 justify-between items-center w-[100%]'>
                <div className='text-[#F4A261] text-2xl font-bold'>
                    <Link href='/'>Metropolitan E-Learning</Link>
                </div>
                <div>
                    <ul className='flex items-center gap-10 text-[#F4A261]'>
                        <li className='hover:text-[#e9c46a]'>
                            <Link href='/html'>HTML</Link>
                        </li>
                        <li className='hover:text-[#e9c46a]'>
                            <Link href='/css'>CSS</Link>
                        </li>
                        <li className='hover:text-[#e9c46a]'>
                            <Link href='/javascript'>JavaScript</Link>
                        </li>
                        <li className='hover:text-[#e9c46a]'>
                            <Link href='/react'>ReactJS</Link>
                        </li>
                        <li className='hover:text-[#e9c46a]'>
                            <Link href='/next'>Next.js</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-7 text-[#F4A261] font-semibold '>
                    <div className='hover:text-[#e9c46a]'>
                        <Link href='/'>Sign In</Link>
                    </div>
                    <button className='bg-[#F4A261] hover:bg-[#e9c46a] text-[#264653] py-2 px-4 rounded-full'>
                        <Link href='/'>Sign Up</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar