import { Map, List, fromJS } from 'immutable';

/*
* Include entries in state (to use before start a new game)
*/
export function setEntries(state, entries) {
  return state.set('entries', fromJS(entries));
}

/*
* Init user, tally and first round to star to play
* @param Map state
* @param string newUser
* @TODO newUser will be a map (or object) in future versions
*/
export function startGame(state, newUser) {
  const entries = state.get('entries');
  return state.merge({
    game: Map(
      {
        round: entries.first(),
        tally: 0,
        user: newUser
      }
    ),
    entries: entries.skip(1)
  });
}

/*
* Take answer selected by player and increment tally if
* answer selected is equal to correctAnswer
* @param Map gameState
* @param integer answer
*/
export function play(gameState, answer) {
  const correctAnswer = gameState.getIn(['round','correctAnswer']);
  if (correctAnswer === answer) {
    return gameState.updateIn(
        ['tally'],
        tally => tally + 1
      );
  }
  return gameState;
}

/*
* Return next round if exists in entries
* when entries is empty, dont return any round
* @param Map state
*/
export function next(state) {
  const entries = state.get('entries');
  if (entries.size > 0) {
    return state.merge({
      game: Map(
        {
          round: entries.first(),
          tally: state.getIn(['game','tally']),
          user: state.getIn(['game','user'])
        }
      ),
      entries: entries.skip(1)
    });
  }
  return state.merge({
    game: Map(
      {
        tally: state.getIn(['game','tally']),
        user: state.getIn(['game','user'])
      }
    ),
    entries: List()
  });
}

/*
* Return the only the results list in state.
* For now, we return only the current game result
* Later we have to send this result to server and it returns the complete list
* @param Map state
*/
export function setResults(state) {
  const userInGame = state.getIn(['game','user']);
  const tallyInGame = state.getIn(['game','tally']);
  if (!state.hasIn(['game','round'])) {
    return Map({
      results: List.of(
        Map(
          {
            user: userInGame,
            tally: tallyInGame
          }
        )
      )
    });
  }
  return state;
}


export default function (state = Map(), action) {
  switch(action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'START_GAME':
        return startGame(state, action.user);
    default:
      return state;
  }
}
