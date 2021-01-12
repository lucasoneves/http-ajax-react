import React, { Component } from "react";
import axios from "../../../axios";
import "./Posts.css";

import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";

class Posts extends Component {
	state = {
		posts: [],
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
		// console.log(id);
	};
	render() {
		const posts = this.state.posts.map((post) => {
			return (
				<Link to={'/' + post.id} key={post.id}>
					<Post
						title={post.title}
						author={post.author}
						clicked={() => this.postSelected(post.id)}
					/>
				</Link>
			);
		});
		return (
			<div>
				<section className="Posts">{posts}</section>
			</div>
		);
	}
}

export default Posts;
