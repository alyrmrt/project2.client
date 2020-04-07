const config = require('../config')
const store = require('../store')

const getBills = function () {
  return $.ajax({
    url: config.apiUrl + '/bills',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addBills = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bills',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getBills,
  addBills
}
