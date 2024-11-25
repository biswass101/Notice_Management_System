import React from 'react'
import PostCard from '../PostCard/PostCard'

const LastPosted = () => {
  return (
    <div className='last-posted-posts'>
        <p className='text-4xl font-sans font-bold'>Last Posted ⚡</p>
        <div className="scrollable-post-div">
            <PostCard/>
        </div>
    </div>
  )
}

export default LastPosted