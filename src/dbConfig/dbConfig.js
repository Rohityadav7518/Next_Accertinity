import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOBD_URI)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('Mongodb Database connected successfully');

    })

    connection.on('error', (err) => {
      console.log('Mongodb Database Connection failed ' + err);
      process.exit()

    })

  } catch (error) {
    console.log("Mongodb connection Failed ", error);

  }
}