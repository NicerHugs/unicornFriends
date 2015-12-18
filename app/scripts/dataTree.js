export default {
  session: {
    isDeleting: false,
    isFetching: false,
    id: '',
    username: '',
    sessionToken: '',
    unicornFriends: [],
    isAddingUnicornFriend: false
  },
  newUnicorn: {
    isSaving: false,
    name: '',
    color: '',
    power: '',
    creator: ''
  },
  newUser: {
    isSaving: false,
    username: ''
  },
  entities: {
    users: {
      isFetching: false
    },
    unicorns: {
      isFetching: false
    },
  }
}

// user looks like this:
//
// '1': {
//   id: '1',
//   username: '',
//   isAddingUnicornFriend: false,
//   unicornFriends: [id, id],
//   isFetching: false
// }
//
// unicorn looks like this:
//
//   '1': {
//     id: '1',
//     name: '',
//     color: '',
//     power: '',
//     creator: id,
//     isFetching: false
//   }
