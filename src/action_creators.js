export function setEntries(entries){
  return {
    type: 'SET_ENTRIES',
    entries
  };
}

export function startGame(user){
  return {
    type: 'START_GAME',
    user
  };
}

export function play(id){
  return {
    type: 'PLAY',
    answer: id
  };
}

export function next(){
  return {
    type: 'NEXT'
  };
}

export function setResults(){
  return {
    type: 'SET_RESULTS'
  };
}

