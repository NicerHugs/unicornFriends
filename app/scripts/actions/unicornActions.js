export default {
  FETCH_ALL_UNICORNS: function FETCH_ALL_UNICORNS() {
    return {
      type: 'FETCH_ALL_UNICORNS'
    };
  },
  RECEIVE_ALL_UNICORNS: function RECEIVE_ALL_UNICORNS(response) {
    return {
      type: 'RECEIVE_ALL_UNICORNS',
      response: response
    };
  }
}
