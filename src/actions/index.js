import { ENDPOINTS, ACTION_TYPE } from 'constants.js';


export const getRepos = (dispatch) => {
    console.log('get repos');

    const onSuccess = (response) => {
        console.log('onsuccess');
        if (response.status !== 200) {
            onReject('There was a problemwit request. Status Code: ' + response.status);
            return;
        }
        response.json().then(function (data) {
            dispatch({ type: ACTION_TYPE.FETCH_REPOS.SUCCESS, data });
        });

    };

    const onReject = (error) => {
        dispatch({ type: ACTION_TYPE.FETCH_REPOS.ERROR, error });
    }

    dispatch({ type: ACTION_TYPE.FETCH_REPOS.START });

    fetch(ENDPOINTS.REPOS_LIST)
        .then(onSuccess)
        .catch(onReject);
}
