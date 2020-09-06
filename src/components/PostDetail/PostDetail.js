import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
    return (
        <div>
            <h1>Read the full post of: {postId}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr/>
            <div>
            <h3>Write Your Comment Below: </h3>
            <hr/>
            <Comment></Comment>
            </div>
        </div>
    );
};

export default PostDetail;