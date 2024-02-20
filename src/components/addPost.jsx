import React, { useState } from 'react'


const AddPost = ({setPostText, addItem}) => {
  
  return (
    
    <div className='addPost'>
        <div className='pfp'>
          <img src="src\assets\pfp.jpg" alt="profile" /></div>
        <form>
          <textarea
            name="postItem"  
            placeholder='What is happening?!' 
            required
            
            />
          <button 
          className='postButton'
          onClick={addItem}
          >Post</button>
        </form>
    </div>
    
  )
}

export default AddPost