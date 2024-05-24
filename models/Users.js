const mongoose = require("mongoose");

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a Mongoose model named "users" based on the UserSchema
const UserModel = mongoose.model("users", UserSchema);

// Export the UserModel so that it can be used elsewhere in your application
module.exports = UserModel;
