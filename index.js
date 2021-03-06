import choo from 'choo'

import './assets/style.css'

import * as Sourmash from 'sourmash'

var app = choo()

app.use(function (state, emitter) {
  state.fileNames = []
  state.Sourmash = Sourmash
  emitter.on('fileDrop', function (data) {
    Array.prototype.push.apply(state.fileNames, data)
    emitter.emit('render')
  })
})

app.route('/', require('./templates/main'))
app.route('/*', require('./templates/404'))

if (!module.parent) app.mount('body')
else module.exports = app
