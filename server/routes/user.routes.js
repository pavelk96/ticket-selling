
const {Router} = require('express')
const jwt = require('jsonwebtoken')
const router = Router()
const UserInfo = require('../models/User-Info')

// /api/user-info/favorite-films
router.post(
    '/favorite-films',
    async (req, res) => {
        try {
            const {token} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const user = await UserInfo.findOne({id: decoded?.payload.userId});
            if (user?.favoriteFilms !== []) {
                res.json(user.favoriteFilms)
            } else {
                res.status(404).json({message: "Нет избранных фильмов"})
            }

        } catch (e) {
            console.log("ошибка",e)
        }
    }
)

// /api/user-info/add-favorite-film
router.post(
    '/add-favorite-film',
    async (req, res) => {
        try {
            const {token, filmId} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const userInfo = await UserInfo.findOne({id: decoded.payload.userId});
            if (userInfo.favoriteFilms != null)
            userInfo.favoriteFilms = [...userInfo.favoriteFilms, filmId]
            userInfo.save();
            res.json(filmId)
            res.status(201).json({message:"Фильм добавлен в избранное"})
        } catch (e) {
            console.log(e)
        }
    }
)

module.exports = router
