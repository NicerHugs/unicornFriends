import initialState from './../dataTree'

function unicornApp(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {isFetching: true})
      });
    case 'RECEIVE_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {
          isFetching: false,
          user: action.response.objectId,
          username: action.response.username,
          sessionToken: action.response.sessionToken
        })
      });
    case 'REQUEST_DELETE_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {
          isDeleting: true
        })
      });
    case 'RECEIVE_DELETE_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {
          isDeleting: false,
          user: '',
          username: '',
          sessionToken: ''
        })
      });
    case 'FETCH_ALL_UNICORNS':
      return Object.assign({}, state, {
        entities: Object.assign({}, state.entities, {
          unicorns: Object.assign({}, state.entities.unicorns, {
            isFetching: true
          })
        })
      });
    case 'RECEIVE_ALL_UNICORNS':
      return Object.assign({}, state, {
        unicorns: action.response.map(unicorn => {return unicorn.objectId}),
        entities: Object.assign({}, state.entities, {
          unicorns: Object.assign({}, state.entities.unicorns, action.response.reduce((acum, unicorn) => {
            acum[unicorn.objectId] = {
              id: unicorn.objectId,
              name: unicorn.name,
              color: unicorn.color,
              power: unicorn.power,
              creator: unicorn.creator
            }
            return acum;
          }, {isFetching: false}))
        })
      });
    default:
      return state
  }
}

export default unicornApp;
