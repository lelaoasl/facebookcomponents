import React, { Component } from 'react';

import './post-list.styles.css';

import Post from '../../components/post/Post';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur?",
        comments: [
          {
            id: 1,
            author: {
              name: "Amanda Alves",
              avatar: "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&w=1000&q=80"
            },
            content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg"
        },
        date: "04 Jun 2019",
        content: "Nulla efficitur erat purus, hendrerit tincidunt.",
        comments: [
          {
            id: 1,
            author: {
              name: "Amanda Alves",
              avatar: "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&w=1000&q=80"
            },
            content: "Curabitur a nisl quis metus facilisis pharetra. Aliquam interdum auctor feugiat. Pellentesque eget eros malesuada, imperdiet purus et, tempor metus. Donec maximus volutpat lectus, in lobortis est viverra eget. Vestibulum auctor justo ac sem elementum ultricies. Sed condimentum arcu eu mauris tincidunt sodales. Vestibulum placerat justo vel leo lacinia hendrerit."
          }
        ]
      },
    ]
  };

  render() {
    return(
      <div className="content">
        <ul>
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </ul>

    </div>

    )
 
  }
}

export default PostList;
