'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/event.js')
const billsEvents = require('./bills/event.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#get-bills').on('click', billsEvents.ongetBills)
  $('#create-bills').on('submit', billsEvents.onaddBills)
  billsEvents.addHandlers()
})
