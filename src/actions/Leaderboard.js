import axios from 'axios';
import {
  FOUND_LEADERBOARD
} from './types';

export const findLeaderboard = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      data: {
        queueId: 475,
        rankingCriteria: 1
      },
      url: 'http://localhost:3000/leaderboard',
    };
    axios(options)
    .then((leaderboard) => {
      console.log('sent');
      dispatch({
        type: FOUND_LEADERBOARD,
        payload: leaderboard.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
