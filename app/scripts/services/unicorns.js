import $ from 'jquery';

export default {
  fetchAll: function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: 'https://api.parse.com/1/classes/Unicorn',
        success: response => {resolve(response.results)},
        fail: reject
      });
    });
  },
  saveNew: function(data) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: 'https://api.parse.com/1/classes/Unicorn',
        type: 'POST',
        data: JSON.stringify(data),
        success: resolve,
        fail: reject
      });
    });
  }

}
