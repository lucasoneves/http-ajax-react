import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Blog.css";
import Posts from "../../containers/Blog/Posts/Posts";

class Blog extends Component {
	render() {
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
				<Route path="/" exact render={() => <h1>Home 1</h1>}></Route>
			</div>
		);
	}
}

export default Blog;
