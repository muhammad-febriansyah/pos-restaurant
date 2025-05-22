import React from 'react'

export default function SidebarDashboard() {
  return (
      <aside className="h-screen fixed flex-none space-y-5 bg-white py-6 px-4 w-[250px] lg:block hidden">
       <div className="flex justify-center">
            <img src="/images/icon.png" className='object-cover w-48' alt="" />
        </div>
    </aside>
  )
}
