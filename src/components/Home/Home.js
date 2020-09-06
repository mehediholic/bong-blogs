import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    }, [])
    return (

        <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <Typography component="div" style={{height: '100vh' }}>
            {
                posts.map(post => <Post post={post}></Post>)
             }
            </Typography>
        </Container>
    </React.Fragment>
    );
};

export default Home;