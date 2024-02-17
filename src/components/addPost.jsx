import React from 'react'

const AddPost = () => {
  return (
    <>
    <div className='addPost'>
        <div className='pfp'><img src="src\assets\pfp.jpg" alt="" /></div>
        <div>
            <div ><input type="text" placeholder='What is happening?!' /></div>
            <div>
              <button className='postButton'>Post</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddPost