import React from 'react'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=''>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout