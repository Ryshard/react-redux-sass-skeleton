import React from 'react';
import autoBind from 'auto-bind';
import ReposListItem from 'components/repos-list-item';

class ReposList extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            repos: null
        };
    }


    renderRepos() {
        const { repos } = this.props;

        if (!repos) {
            return null;
        }

        return (
            <div className="repos-list">
                {repos.map((item, i) => (<ReposListItem repo={item} key={i} />))}
            </div>
        );

    }




    render() {
        return (
            <div className="listing">
                {this.renderRepos()}
            </div>
        );
    }
};

export default ReposList;
