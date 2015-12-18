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
  fetchByIds: function(ids) {
    let url = 'https://api.parse.com/1/classes/Unicorn';
    if (typeof ids === 'string') {
      url = url + '/' + ids;
    } else {
      url = url + '?where=' + JSON.stringify({
        $or: ids.map(id => {
          return {objectId: id};
        })
      });
    }
    return new Promise(function(resolve, reject) {
      $.ajax({
        headers: {
          "X-Parse-Session-Token": localStorage.getItem('sessionToken')
        },
        url: url,
        success: response => {
          if (response.results) {
            resolve(response.results)
          } else {
            resolve(response);
          }
        },
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
