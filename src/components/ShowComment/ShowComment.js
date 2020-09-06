import React from 'react';

const ShowComment = (props) => {
    const {id , body , email} =props.comment;
    return (
            <>
             <h5>User Id : {id}</h5> 
             <h5>User Email : {email}</h5>
             <h5>User Comments :</h5>
             <p>{body}</p>
             </>
    );
};

export default ShowComment;