import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post/Post';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      {
        posts.map(post => <Post post={post}></Post>)
  
      }
    </div>
  );
}

export default App;
