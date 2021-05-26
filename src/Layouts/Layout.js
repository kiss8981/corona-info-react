import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{paddingTop: "75px"}}></div>
                {children}
            <Footer />
        </>
    )
}


export default Layout;