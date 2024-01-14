import mongoose from "mongoose"

const URI =`mongodb+srv://vasylpopyk:5snimnWVDRzhyEpY@cluster0.wx2zqic.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(URI).then(()=> {
    console.log('Connected to MongoDB')
}).catch((e) => {
    console.error(e)
})