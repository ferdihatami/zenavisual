import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    const {children} = props
  return (
    <>
    <Header {...props}/>
    <div>{children}</div>
    <Footer {...props}/>
    </>
  )
}

export default Layout