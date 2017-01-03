var $ = require('jquery')
var listeners = require('./listener')

$('document').ready(function() {
  listeners.listen()
})
