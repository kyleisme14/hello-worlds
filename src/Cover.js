import React, { Component } from "react";

const comment = {
	words: 'happy holiday',
	number: 25
}

const commentList = [
	{
		words: 'happy holiday',
		number: 10
	},
	{
		words: 'Welcome to 2022',
		number: 20
	},
	{
		words: 'It is January',
		number: 30
	},
	{
		words: 'It is Febuary',
		number: 40
	}
]

const displayCommentList = commentList.map((c, idx) => {
	return(
			<h1 key={idx}>{c.words}, we hope you use your ${c.number}! We love you!</h1>
			)
		})


class Cover extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img src="../images/bulma.png" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img title='image1'
                    src="https://picsum.photos/800/600/?random"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">Superhero Scaffolding</h1>
                <h2 className="subtitle is-4">
                  {comment.number}
                   </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined">
                   {comment.words}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {displayCommentList}
        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <a>And this is the bottom</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
