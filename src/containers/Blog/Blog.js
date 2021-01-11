import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
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
								<NavLink exact to="/" activeStyle={{color: 'purple'}} activeClassName="page-active">Home</NavLink>
							</li>
							<li>
							<NavLink to={{
								pathname: '/new-post',
								hash: "#submit",
								search: '?quick-submit=true',
								exact: true
							}}>New Post</NavLink>
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
