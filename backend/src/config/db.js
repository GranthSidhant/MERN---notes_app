import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://admin:112233445566@mern-stackpratice.rzllhfk.mongodb.net/notes_db?retryWrites=true&w=majority&appName=MERN-StackPratice"
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1); //exit with failur
  }
};
