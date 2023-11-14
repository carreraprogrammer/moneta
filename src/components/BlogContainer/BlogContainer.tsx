import React from 'react';
import './Blog.scss';

interface BlogProps {
  blogImage: string;
}

const Blog: React.FC<BlogProps> = ({ blogImage }) => {
  return (
    <div className='blogContainer'>
      <img className='blogImage' src={blogImage} alt='blog' />
    </div>
  );
};

export default Blog;
