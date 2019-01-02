import React from 'react';
import ReposList from 'components/repos-list';
import { connect } from 'react-redux';
import { getRepos } from 'actions';
import { ACTION_STATUS } from 'constants.js';
import autoBind from 'auto-bind';


class Home extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
		this.state = {
			loadError: false,
			loading: false,
			repos: null,
			singleExpanded: false
		};
	}

	componentWillReceiveProps(newProps) {
		const { reposLoadStatus: existingLoadStatus } = this.props;
		const { reposLoadStatus: newLoadStatus, reposList } = newProps;

		if (existingLoadStatus == ACTION_STATUS.IN_PROGRESS && newLoadStatus == ACTION_STATUS.ERROR) {
			this.setState({ loadError: true, loading: false });
		} else if (existingLoadStatus == ACTION_STATUS.IN_PROGRESS && newLoadStatus == ACTION_STATUS.SUCCESS) {
			// console.log('componentWillReceiveProps, success load detected', reposList);
			this.setState({
				loadError: false,
				loading: false,
				repos: reposList
			});
		} else if (!existingLoadStatus && newLoadStatus === ACTION_STATUS.IN_PROGRESS) {
			this.setState({ loading: true, loadError: false });
		}

	}

	loadRepos() {
		// console.log('load repos');
		this.props.fetchRepos();
	}

	render() {
		const {
			repos,
			loading
		} = this.state;
		const btnClass = repos ? 'btn accent disabled' : 'btn accent';
		return (
			<div className="container">
				<h1>My Repos</h1>
				<button className={btnClass} onClick={this.loadRepos} disabled={repos}>Load Repos</button>
				{loading && <div className="loader"></div>}
				{repos && <ReposList repos={repos} />}
			</div>
		);
	}
};


const mapStateToProps = state => ({
	reposList: state.reposReducer.repos,
	reposLoadStatus: state.reposReducer.reposLoadStatus
});

const mapDispatchToProps = dispatch => ({
	fetchRepos: () => getRepos(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
