import React from "react";
import Avater from '../Avater/Avater';


const PostComments = (props) => {
  const { name, email, body } = props.comment;

  return (
      <div>
          <Avater></Avater>
        <h3 style={{ color: "green" }}>{name}</h3>
        <p>
          <strong style={{ color: "purple" }}>{email}</strong> - {body}
        </p>
      </div>
  );
};

export default PostComments;