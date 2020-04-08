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

const onDeleteBills = (event) => {
  const id = $(event.target).data('id')
  api.deleteBills(id)
  .then(function () {
 ongetBills(event)
})
}




const removeHide = $('#add-bills').click(function () {
  $('#create-bills').removeClass('hide')
})






const addHandlers = () => {
  $('.content').on('click', '.delete-btn', onDeleteBills)
}





module.exports = {
  ongetBills,
  onaddBills,
  addHandlers,
  removeHide
}
