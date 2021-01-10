import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Blog.css";
import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost"

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								{/* <a href="/">Home</a> */}
								<Link to="/">Home</Link>
							</li>
							<li>
							<Link to={{
								pathname: '/new-post',
								hash: "#submit",
								search: '?quick-submit=true'
							}}>New Post</Link>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={() => <h1>Home 1</h1>}></Route> */}
				<Route path="/" exact component={Posts}></Route>
				<Route path="/new-post" component={NewPost}></Route>
			</div>
		);
	}
}

export default Blog;
