import React from 'react'
import TodosList from './TodosList'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'TODOS Page',
  }

function RootLayout({
    children
}: {
    children: React.ReactNode
}
) {
  return (
    <main className='flex '>
        <div>
            <TodosList/>
        </div>
        <div className="flex-1">
            {children}
        </div>
    </main>
   
  )
}

export default RootLayout