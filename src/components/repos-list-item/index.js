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
            flag,
            nativeName
        } = repo;

        return (
            <div className="repoListItem">
                <h2>{name}</h2>
                <h4><em>({nativeName})</em></h4>
                {flag && <img src={flag} style={ { maxWidth: '220px' }}/>}
            </div >
        );
    }
}

export default RepoListItem;
