import { FOUND_PLAYERS } from './types';

export const findPlayers = () => {
  return {
    type: FOUND_PLAYERS,
    payload: 'player'
  };
};
