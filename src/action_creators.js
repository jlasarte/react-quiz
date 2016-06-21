export function startGame(user){
  return {
    type: 'START_GAME',
    user: user
  };
}

export function play(id){
  return {
    type: 'PLAY',
    answer: id
  };
}
