import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
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
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  );
}

export default App;
