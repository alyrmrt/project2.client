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

const deleteBills = function (id) {
  return $.ajax({
    url: config.apiUrl + '/bills/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const updateBills = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/bills/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}




module.exports = {
  getBills,
  addBills,
  deleteBills,
  updateBills

}
