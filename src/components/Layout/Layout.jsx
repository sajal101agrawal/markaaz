import { Outlet } from 'react-router-dom'
import Nav from '../Navbar/Nav'
import Search from '../Search/Search'
import DataStewardshipData from '../DataStewardship/DataStewardshipData'

const Layout = () => {
  return (
    <>
      <div className='h-screen overflow-hidden'>
        <Nav />
        <Search />
        <DataStewardshipData />
        <main>
          <Outlet />
        </main>
        <p className='absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-light'>&copy; 2024 Markaaz Inc. Use of this portal is governed by the terms of the licensing agreement</p>
      </div>
    </>
  )
}

export default Layout