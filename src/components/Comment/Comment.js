import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';

const Comment = () => {

const {id} = useParams();

const [comment ,setComment] =useState([])

useEffect(()=> {
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
.then(res => res.json())
.then(data => setComment(data))

})
    return (
        <div>
           {
                comment.map(comment => <ShowComment comment={comment}></ShowComment>)
           }
        </div>
    );
};

export default Comment;