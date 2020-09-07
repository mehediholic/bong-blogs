import React from "react";
import Avater from '../Avater/Avater';


const PostComments = (props) => {
  const { name, email, body } = props.comment;

  const commentStyle = {
    borderBottom: "1px solid gray",
    display: "flex",
    marginBottom: "20px",
  };

  const commentBody = {
    marginLeft: "20px"
  }


  return (
      <div style={commentStyle}>
        <div>
          <Avater></Avater>  
        </div>        
        <div style={commentBody}>
          <h3 style={{ color: "#1abc9c"}}>{name}</h3>
          <p><small>Email: {email}</small></p>
          <p>{body}</p>
        </div>
      </div>
  );
};

export default PostComments;