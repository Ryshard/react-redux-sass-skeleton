// import { extractReposData } from './helpers';
import { ACTION_STATUS, ACTION_TYPE } from 'constants.js';

export default (state = { REPOSList: [] }, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_REPOS.SUCCESS:
      // const reposData = extractReposData(action.data);
      // console.log('repos reducer: success', reposData);
      return {
        ...state,
        repos: action.data,
        reposLoadStatus: ACTION_STATUS.SUCCESS
      };


    case ACTION_TYPE.FETCH_REPOS.ERROR:
      console.log('Action Error', action.error);
      return {
        ...state,
        reposLoadStatus: ACTION_STATUS.ERROR,
        error: action.error
      };

    case ACTION_TYPE.FETCH_REPOS.START:
      return {
        ...state,
        reposLoadStatus: ACTION_STATUS.IN_PROGRESS
      };

    default:
      return state
  }
};
