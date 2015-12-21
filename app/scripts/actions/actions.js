export default {
  RECEIVE_NEW_USER: function RECEIVE_NEW_USER(response) {
    return {
      type: 'RECEIVE_NEW_USER',
      response
    }
  },

  REQUEST_NEW_USER: function REQUEST_NEW_USER(username) {
    return {
      type: 'REQUEST_NEW_USER',
      username
    }
  },

  FETCH_SESSION: function FETCH_SESSION() {
    return {
      type: 'FETCH_SESSION'
    };
  },

  RECEIVE_SESSION: function RECEIVE_SESSION(response) {
    return {
      type: 'RECEIVE_SESSION',
      response
    };
  },

  REQUEST_DELETE_SESSION: function REQUEST_DELETE_SESSION() {
    return {
      type: 'REQUEST_DELETE_SESSION'
    };
  },

  RECEIVE_DELETE_SESSION: function RECEIVE_DELETE_SESSION(response) {
    return {
      type: 'RECEIVE_DELETE_SESSION',
      response
    };
  },

  REQUEST_FETCH_USER: function REQUEST_FETCH_USER() {
    return {
      type: 'REQUEST_FETCH_USER',
    }
  },
  RECEIVE_EXISTING_USER: function RECEIVE_EXISTING_USER(response) {
    return {
      type: 'RECEIVE_EXISTING_USER',
      response: response
    }
  },

  RECEIVE_UNICORN_FRIEND: function RECEIVE_UNICORN_FRIEND(response) {
    return {
      type: 'RECEIVE_UNICORN_FRIEND',
      response: response
    };
  }
}
