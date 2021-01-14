import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "../../containers/Blog/Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								{/* <a href="/">Home</a> */}
								<NavLink
									exact
									to="/"
									activeStyle={{ color: "purple" }}
									activeClassName="page-active"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: "/new-post",
										hash: "#submit",
										search: "?quick-submit=true",
										exact: true,
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={() => <h1>Home 1</h1>}></Route> */}
				<Switch>
					<Route path="/" exact component={Posts}></Route>
					<Route path="/new-post" component={NewPost}></Route>
					<Route path="/:id" exact component={FullPost}></Route>
				</Switch>
			</div>
		);
	}
}

export default Blog;
