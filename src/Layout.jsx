import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const Layout = () => {
    return (
        <>
            <div className='app-layout'>

                <Navbar />

                <main className="page-content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
