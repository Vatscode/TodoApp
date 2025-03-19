import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin4:2003@cluster0.rblgb.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

// Define the model
const todo = mongoose.model('todos', todoSchema);

// Export the model using default export
export default todo;
