const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')


    const ongetBills = function (event) {
      event.preventDefault()
      api.getBills()
      .then(ui.getBillsSuccess)
       .catch(ui.failure)
    }

const onaddBills = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addBills(data)
    .then(ui.addBillsSuccess)
    .catch(ui.failure)
}

module.exports = {
  ongetBills,
  onaddBills
}
