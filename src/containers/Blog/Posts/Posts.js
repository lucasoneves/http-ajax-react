import React, { Component } from 'react'
import axios from '../../../axios'
import './Posts.css'

import Post from '../../../components/Post/Post'

class Posts extends Component {
  state = {
		posts: []
  };

  componentDidMount() {
		axios.get("/posts").then((response) => {
			const posts = response.data.slice(0, 4);
			const updatedPosts = posts.map((post) => {
				return {
					...post,
					author: "Max",
				};
			});
			this.setState({
				posts: updatedPosts,
			});
		});
  }
  
  postSelected = (id) => {
		this.setState({ selectedPostId: id });
	};
  render() {
    const posts = this.state.posts.map((post) => {
			return (
				<Post
					title={post.title}
					key={post.id}
					author={post.author}
					clicked={() => this.postSelected(post.id)}
				/>
			);
		});
    return (
      <div>
        <section className="Posts">
         { posts }
        </section>
      </div>
    )
  }
}

export default Posts