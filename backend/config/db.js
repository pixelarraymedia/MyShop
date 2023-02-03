import mongoose from 'mongoose'


const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
    
        })

        console.log(`MongoDB connected: ${conn.connection.host}` .cyan.underline)

    } catch (error){

            // setting up error if connectionf fails
        console.error(`Error: ${error.message}` .red.underline.bold)
        process.exit(1)
    }

}

export default connectDB