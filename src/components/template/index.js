import React from 'react';
import { connect } from 'react-redux';

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { children } = this.props;
		return (
			<div className="page" key="1">
				<header>
					<div className="container">
						<h2>React - Redux - Sass</h2>
					</div>
				</header>
				<main>
					{children}
				</main>
				<footer>
					<div className="container">
						React.js / redux / sass boilerpplate<br />
						by: Gabriel Garus <br />
						gitHub: <a href="https://github.com/Ryshard/react-redux-sass-skeleton" target="_blank">https://github.com/Ryshard/react-redux-sass-skeleton</a><br />
						Thank You.
					</div>
				</footer>
			</div>
		);
	}
};

export default Template;
