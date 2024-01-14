import express from "express"
//імпотр усього з authController
import * as taskController from '../controllers/taskController.js'
import checkAuth from '../middlewares/checkAuth.js'
import checkAdmin from "../middlewares/checkAdmin.js"
//створення router - а
const router = express.Router()
//методи на роутері
router.use(checkAuth)

router.post('/task', taskController.creteTask)

router.get('/task', taskController.getTasksByUserId)
router.get('/task/all', checkAdmin, taskController.getAllTasks)
router.get('/task/:id', taskController.getTask)
router.put('/task/:id', taskController.updateTask)
router.delete('/task/:id', taskController.deleteTask)

//експорт роутера
export default router