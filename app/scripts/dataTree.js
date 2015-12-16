export default {
  session: {
    isDeleting: false,
    isFetching: false,
    user: '',
    username: '',
    sessionToken: '',
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
    name: ''
  },
  unicorns: [],
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
//   name: '',
//   isAddingUnicornFriend: false,
//   unicornFriends: [id, id]
// }
//
// unicorn looks like this:
//
//   '1': {
//     id: '1',
//     name: '',
//     color: '',
//     power: '',
//     creator: id
//   }