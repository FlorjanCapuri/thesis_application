import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotDound() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center font-semibold text-5xl gap-5 h-[calc(100vh-96px)]'>
                <p>Error 404</p>
                <p>Oooops...</p>
                <p>That page cannot be found</p>
                <p>Go back to the <Link href='/' className='underline'>Homepage</Link></p>
            </div>
        </div>
    )
}

export default NotDound