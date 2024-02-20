import React, { useState } from 'react'
import AddPost from './addPost';

const Main = () => {

    const [posts, setPosts] = useState('');
    const [postText, setPostText] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    function addItem(){

    }
   
  return (
    <main>
        <AddPost addItem={addItem} setPostText={setPostText}/>
    </main>
  )
}

export default Main