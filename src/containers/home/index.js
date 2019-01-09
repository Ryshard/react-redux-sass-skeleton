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
			console.log('ERROR');
		} else if (existingLoadStatus == ACTION_STATUS.IN_PROGRESS && newLoadStatus == ACTION_STATUS.SUCCESS) {
			console.log('componentWillReceiveProps, success load detected', reposList);
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
		const { userInput } = this.state;
		this.props.fetchRepos(userInput);
	}

	handleInput(e){
		this.setState({userInput: e.target.value});
	}
	render() {
		const {
			repos,
			loading
		} = this.state;
		const inputField = false;
		const btnClass = repos ? 'btn accent disabled' : 'btn accent';
		return (
			<div className="container">
				<h1>Countries</h1>
				<h5>source: <a href="https://restcountries.eu" target="_blank">https://restcountries.eu</a></h5>
				{inputField && <input onChange={this.handleInput} />}
				<button className={btnClass} onClick={this.loadRepos} disabled={repos}>Load Countries</button>
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
	fetchRepos: (name) => getRepos({dispatch, name})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
