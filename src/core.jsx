import { Map, List, fromJS } from 'immutable'

/*
* Include entries in state (to use before start a new game)
*/
export function setEntries(state, entries) {
  return state.set('entries', fromJS(entries));
}

/*
* Init user, tally and first round to star to play
*/
export function startGame(state, user) {
  const entries = state.get('entries');
  return state.merge({
    game: Map(
      {
        round: entries.first(),
        tally: 0,
        user: user
      }
    ),
    entries: entries.skip(1)
  });
}

/*
* Take answer selected by player and increment tally if
* answer selected is equal to correctAnswer
*/
export function play(state, answer) {
  const correctAnswer = state.getIn(['game', 'round','correctAnswer']);
  if (correctAnswer === answer) {
    return state.updateIn(
        ['game', 'tally'],
        tally => tally + 1
      );
  }
  return state;
}

/*
* Return next round if exists in entries
* when entries is empty, dont return any round
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
*/
export function getResults(state) {
  const user = state.getIn(['game','user']);
  const tally = state.getIn(['game','tally']);
  if (!state.hasIn(['game','round'])) {
    return Map({
      results: List.of(
        Map(
          {
            user: user,
            tally: tally
          }
        )
      )
    });
  }
  return state;
}
