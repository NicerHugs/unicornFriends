export default {
  FETCH_UNICORNS: function FETCH_UNICORNS() {
    return {
      type: 'FETCH_UNICORNS'
    };
  },
  RECEIVE_UNICORNS: function RECEIVE_UNICORNS(response) {
    return {
      type: 'RECEIVE_UNICORNS',
      response: response
    };
  },
  REQUEST_NEW_UNICORN: function REQUEST_NEW_UNICORN(data) {
    return {
      type: 'REQUEST_NEW_UNICORN',
      data: data
    };
  },
  RECEIVE_NEW_UNICORN: function RECEIVE_NEW_UNICORN(response) {
    return {
      type: 'RECEIVE_NEW_UNICORN',
      response: response
    };
  }
}
