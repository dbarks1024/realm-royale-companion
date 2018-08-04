import { FOUND_LEADERBOARD } from '../actions/types';

const INITIAL_STATE = {
  leaderboard: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOUND_LEADERBOARD:
      return { ...state, leaderboard: action.payload };
    default:
      return state;
    }
};
