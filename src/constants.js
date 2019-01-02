export const ENDPOINTS = {
    REPOS_LIST: 'https://api.github.com/users/ryshard/repos',
};

export const ACTION_STATUS = {
    NOT_STARTED: -1,
    IN_PROGRESS: 0,
    SUCCESS: 1,
    ERROR: 2
};

export const ACTION_TYPE = {
    FETCH_REPOS: {
        START: 'ON_FETCH_REPPOS_START',
        SUCCESS: 'ON_FETCH_REPPOS_SUCCESS',
        ERROR: 'ON_FETCH_REPPOS_ERROR'
    }
};
