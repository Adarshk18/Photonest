import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/configg';
import {Container, PostCard} from '../components'

function Home() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{},[])
    
  return (
    <div>Home</div>
  )
}

export default Home