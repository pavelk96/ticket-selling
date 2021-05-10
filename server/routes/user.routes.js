
const {Router} = require('express')
const jwt = require('jsonwebtoken')
const router = Router()
const UserInfo = require('../models/User-Info')

// /api/auth/favorite-films
router.post(
    '/favorite-films',
    async (req, res) => {
        try {
            const {token} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const user = await UserInfo.findOne({id: decoded.payload.userId});
            const {favoriteFilms} = user;
            res.json(favoriteFilms)
        } catch (e) {
            console.log("ошибка",e)
        }
    }
)

// /api/auth/add-favorite-film
router.post(
    '/add-favorite-film',
    async (req, res) => {
        try {
            const {token, filmId} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const userInfo = await UserInfo.findOne({id: decoded.payload.userId});
            userInfo.favoriteFilms = [...userInfo.favoriteFilms, filmId]
            userInfo.save();
            res.json(filmId)
        } catch (e) {
            console.log(e)
        }
    }
)

module.exports = router
