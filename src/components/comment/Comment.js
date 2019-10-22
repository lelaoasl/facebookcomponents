import React from 'react';

import './comment.styles.css';

const Comment = ({ data }) => {

  return(
    <div className="comment">
      <img src={data.author.avatar} />
      <div className="box">
        <strong>{data.author.name}</strong>
         {data.content}
      </div>
    </div>
  )
}

export default Comment;
