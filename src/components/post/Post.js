import React from 'react';

import './post.styles.css';

import Comment from '../../components/comment/Comment';

const Post = ({ data }) => {
  return(
    <li className="container">
      <div className="post">
        <img src={data.author.avatar} />
        <div className="author">
          <strong>{data.author.name}</strong>
          <div>22/10/2019</div>
        </div>
      </div>
     
      <div className="content">{data.content}</div>

      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </li>
  )
}

export default Post;
