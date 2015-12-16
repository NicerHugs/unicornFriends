export default {
  FETCH_SESSION: function FETCH_SESSION() {
    return {
      type: 'FETCH_SESSION'
    };
  },

  RECEIVE_SESSION: function RECEIVE_SESSION(response) {
    return {
      type: 'RECEIVE_SESSION',
      response: response
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
      response: response
    };
  }
}
