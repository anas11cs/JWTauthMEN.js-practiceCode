const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DB_CONNECT, // replaced 'connection string' with env. variable
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        )
        console.log('MongoDB Connected')
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports = connectDB