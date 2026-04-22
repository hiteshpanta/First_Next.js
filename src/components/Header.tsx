import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-4 py-2'>
      <h1 className='text-xl font-bold'>Logo</h1>

      <nav className='space-x-5'>
        {/* <Link href={'/employees/add'}>Add Employee</Link>
        <Link href={'/posts'}>posts</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/contact'}>contact</Link> */}
          <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
        
        
        <Show when="signed-in">
              <UserButton />
        </Show>
      </nav>

      
    </div>
  )
}
