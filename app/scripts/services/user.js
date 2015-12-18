import $ from 'jquery';

export default {
  register: function(data) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: 'POST',
        url: 'https://api.parse.com/1/users',
        data: JSON.stringify(data),
        success: resolve,
        fail: reject
      });
    });
  },
  login: function(data) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: 'https://api.parse.com/1/login',
        data: data,
        success: resolve,
        fail: reject
      })
    })
  },
  logout: function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: 'https://api.parse.com/1/logout',
        type: 'POST',
        success: resolve,
        fail: reject
      })
    })
  },
  fetch: function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: 'https://api.parse.com/1/users/me',
        success: resolve,
        fail: reject
      });
    });
  },
  addUnicornFriend: function(userId, unicornId) {
    return new Promise(function(resolve, reject) {
      let data = {
        unicornFriends : {
          __op: "AddUnique",
          objects:[unicornId]}
      };
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: 'https://api.parse.com/1/users/' + userId,
        type: 'PUT',
        data: JSON.stringify(data),
        success: resolve,
        fail: reject
      });
    });
  }
}
