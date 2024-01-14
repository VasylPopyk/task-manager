import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createBy: {
        //ID автоматично згенероване 
        type: mongoose.Schema.Types.ObjectId,
        //посилання на 
        ref: 'User'
    },
    role: {
        type: String,
        default: 'user'
    },
})

const Task = mongoose.model('Task', taskSchema)

export default Task