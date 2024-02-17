import React, { useState } from 'react'
import Feed from '../components/feed'

const Homepage = () => {

  const [inputText, setInputText] = useState("");
  const [post, setPost] = useState([]);

  return (
    <>
        <Feed />
    </>
    
  )
}

export default Homepage