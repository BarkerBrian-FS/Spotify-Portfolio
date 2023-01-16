const express = require('express')
const spotify = express.Router()
const spotifyCtrl = require('../controllers/spotify')

spotify.get('/login', spotifyCtrl.login)
spotify.get('/auth', spotifyCtrl.jwt, spotifyCtrl.auth)
spotify.get('/token', spotifyCtrl.jwt, spotifyCtrl.status)
spotify.get('/status', spotifyCtrl.jwt, spotifyCtrl.status)

module.exports = spotify