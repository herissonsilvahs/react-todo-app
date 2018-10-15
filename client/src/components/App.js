import React from 'react'
import Navbar from './utils/Navbar'
export default props => {
  return (
    <div>
      <Navbar />
      { props.children }
    </div>
  )
}