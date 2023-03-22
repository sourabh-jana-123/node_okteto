const mongoose = require("mongoose")

exports.connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
        console.log(`Mongodb is connected with server: ${data.connection.host}`)
    }).catch((error) => {
        console.log(error)
    })
}