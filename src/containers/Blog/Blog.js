import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axiosInstance from "../../axios";

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
	};
	componentDidMount() {
		axiosInstance.get("/posts").then((response) => {
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
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/new-post">New Post</a>
							</li>
						</ul>
					</nav>
				</header>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost id={this.state.selectedPostId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
