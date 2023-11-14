import React from 'react'
import './Blog.scss'

const Blog = ({ blogImage }) => {
  return (
    <div className='blogContainer'>
      <img className='blogImage' src={blogImage} alt='blog' />
    </div>
  )
}

export default Blog