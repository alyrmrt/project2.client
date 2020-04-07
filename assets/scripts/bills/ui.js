const store = require('../store')
const getBillsTemplate = require('../templates/bill-listing.handlebars')
//const newBillsTemplate = require('../templates/new_bills.handlebars')

const getBillsSuccess = function (data) {
  store.bills = data.bills
  const getBillsHtml = getBillsTemplate({bills: data.bills})
  $('#message').html(getBillsHtml)
}

const addBillsSuccess = function () {
  ('#message').text('success')
}




module.exports = {
  getBillsSuccess,
  addBillsSuccess
}
