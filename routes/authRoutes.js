import express from "express"
//імпотр усього з authController
import * as authController from '../controllers/authController.js'
//створення router - а
const router = express.Router()
//методи на роутері
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//експорт роутера
export default router