const store = require('../store')
const getBillsTemplate = require('../templates/bill-listing.handlebars')
const showBillsUpdateTemplate = require('../templates/bill-edit.handlebars')
//const newBillsTemplate = require('../templates/new_bills.handlebars')

const getBillsSuccess = function (data) {
  store.bills = data.bills
  const getBillsHtml = getBillsTemplate({bills: data.bills})
  $('.content').html(getBillsHtml)
}

const addBillsSuccess = function () {
  $('#message').text('success')
}

const showUpdateBill = function (id) {
  const targetBill = store.bills.find(bill => bill.id === id)
  const showBillsUpdateHtml = showBillsUpdateTemplate({ bill: targetBill })
  $('.content').html(showBillsUpdateHtml)
}


module.exports = {
  getBillsSuccess,
  addBillsSuccess,
  showUpdateBill
}
