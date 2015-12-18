import initialState from './../dataTree'

function unicornApp(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_NEW_USER':
      return Object.assign({}, state, {
        newUser: {
          username: action.username,
          isSaving: true
        },
        entities: Object.assign({}, state.entities, {
          users: Object.assign({}, state.entities.unicorns, {
            isFetching: true
          })
        })
      });
    case 'RECEIVE_NEW_USER':
      return Object.assign({}, state, {
        newUser: {
          username: '',
          isSaving: false
        },
        entities: Object.assign({}, state.entities, {
          users: Object.assign({}, state.entities.users, {isFetching: false})
        })
      });
    case 'FETCH_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {isFetching: true})
      });
    case 'RECEIVE_SESSION':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {
          isFetching: false,
          id: action.response.objectId,
          username: action.response.username,
          sessionToken: action.response.sessionToken,
          isAddingUnicornFriend: false,
          unicornFriends: action.response.unicornFriends || []
        }),
        entities: Object.assign({}, state.entities, {
          users: Object.assign({}, state.entities.users, [action.response].reduce((acum, user) => {
            acum[user.objectId] = {
              isFetching: false,
              id: user.objectId,
              username: user.username,
              isAddingUnicornFriend: false,
              unicornFriends: user.unicornFriends || []
            }
          }, {isFetching: false}))
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
          id: '',
          username: '',
          sessionToken: ''
        })
      });
    case 'RECEIVE_UNICORN_FRIEND':
      return Object.assign({}, state, {
        session: Object.assign({}, state.session, {
          unicornFriends: state.session.unicornFriends.reduce((acum, id) => {
            acum.push(id);
            return acum;
          }, [action.id])
        })
      })
    case 'FETCH_UNICORNS':
      return Object.assign({}, state, {
        entities: Object.assign({}, state.entities, {
          unicorns: Object.assign({}, state.entities.unicorns, {
            isFetching: true
          })
        })
      });
    case 'RECEIVE_UNICORNS':
      return Object.assign({}, state, {
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
    case 'REQUEST_NEW_UNICORN':
      return Object.assign({}, state, {
        newUnicorn: {
          name: action.data.name,
          color: action.data.color,
          power: action.data.power,
          creator: action.data.creator,
          isSaving: true
        },
        entities: Object.assign({}, state.entities, {
          unicorns: Object.assign({}, state.entities.unicorns, {
            isFetching: true
          })
        })
      });
    case 'RECEIVE_NEW_UNICORN':
      return Object.assign({}, state, {
        newUnicorn: {
          isSaving: false,
          name: '',
          color: '',
          power: '',
          creator: ''
        },
        entities: Object.assign({}, state.entities, {
          unicorns: Object.assign({}, state.entities.unicorns, [action.response].reduce((acum, unicorn) => {
            acum[unicorn.objectId] = {
              id: unicorn.objectId,
              name: state.newUnicorn.name,
              color: state.newUnicorn.color,
              power: state.newUnicorn.power,
              creator: state.newUnicorn.creator
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
