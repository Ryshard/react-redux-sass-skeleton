import React from 'react';
import autoBind from 'auto-bind';

class RepoListItem extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }


    render() {
        const { repo } = this.props;
        const {
            name,
            description,
            url
        } = repo;

        return (
            <div className="repoListItem">
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={url}>See on GitHub</a>
            </div >
        );
    }
}

export default RepoListItem;
