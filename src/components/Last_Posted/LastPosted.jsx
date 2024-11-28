import React from 'react'
import PostCard from '../PostCard/PostCard'
import './LastPosted.css'
const LastPosted = ({allPost}) => {
  // console.log("jkdjfdj");
  console.log(allPost);
  return (
    <div className='last-posted-posts'>
        <p className='text-4xl font-sans font-bold '>Last Posted ⚡</p>
        <div className="scrollable-post-div flex flex-col overflow-scroll gap-2 mt-12 max-w-[500px] h-[70vh]">
        {allPost && allPost.map((cart, idx) => (
          <PostCard key={idx} id={idx} ct={cart} />
        ))}
            {/* <PostCard ct = {allPost ? allPost[0] : ''}/> */}
        </div>
    </div>
  )
}

export default LastPosted