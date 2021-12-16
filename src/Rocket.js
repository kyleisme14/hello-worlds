import React, { Component } from "react";
import './Forum.css';

const comment = {
	message: 'i love coding. all day everyday!',
	author: '@theodore'
}

const commentList = [
	{
		message: 'i love bball',
		author: '@stephcurry'
	},
	{
		message: 'what are those????',
		author: '@mike'
	},
	{
		message: 'sup?',
		author: '@allison'
	},
	{
		message: 'argh it be like that',
		author: '@piratedude'
	},
	{
		message: 'football!',
		author: '@tombrady'
	},
]

const displayCommentList = commentList.map((c, idx) => {
	return(
		<article className="post" key={idx}>
							<h4>{c.message}</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">{c.author}</a> replied 34 minutes ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
								</div>
							</div>
						</article>

	)

})
class Forum extends Component {
  render() {
    return (
      <section className="container">
			<div className="columns">
				<div className="column is-3">
					<a className="button is-primary is-block is-alt is-large" href="#">New Post</a>
					<aside className="menu">
						<p className="menu-label">
							Tags
						</p>
						<ul className="menu-list">
							<li><span className="tag is-primary is-medium ">Dashboard</span></li>
							<li><span className="tag is-link is-medium ">Customers</span></li>
							<li><span className="tag is-light is-danger is-medium ">Authentication</span></li>
							<li><span className="tag is-dark is-medium ">Payments</span></li>
							<li><span className="tag is-success is-medium ">Transfers</span></li>
							<li><span className="tag is-warning is-medium ">Balance</span></li>
							<li><span className="tag is-medium ">Question</span></li>
						</ul>
					</aside>
				</div>
				<div className="column is-9">
					<div className="box content">
					<article className="post">
							<h4>Bulma: {comment.message}</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">{comment.author}</a> replied 34 minutes ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
								</div>
							</div>
						</article>
						<article className="post">
							<h4>How can I make a bulma button go full width?</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">@red</a> replied 40 minutes ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 0</span>
								</div>
							</div>
						</article>
						<article className="post">
							<h4>TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 13</span>
								</div>
							</div>
						</article>
						<article className="post">
							<h4>How to vertically center elements in Bulma?</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">@brown</a> replied 3 hours ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
								</div>
							</div>
						</article>
						<article className="post">
							<h4>I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
								</div>
							</div>
						</article>

						{displayCommentList}



						<article className="post">
							<h4>How to make tiles wrap with Bulma CSS?</h4>
							<div className="media">
								<div className="media-left">
									<p className="image is-32x32">
										<img src="http://bulma.io/images/placeholders/128x128.png"/>
									</p>
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<a href="#">@rapper</a> replied 3 hours ago &nbsp;
											<span className="tag">Question</span>
										</p>
									</div>
								</div>
								<div className="media-right">
									<span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

export default Forum;
