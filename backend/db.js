const mongoose = require('mongoose');

// const mongoURI = "mongodb://0.0.0.0:27017/inotebook"
const mongoURI = "mongodb+srv://dilip:vv1BVmfjs60d8E8Z@cluster0.xxhkogy.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("connected to mongo successfully.")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = connectToMongo;
// vv1BVmfjs60d8E8Z