// Model for user
// based on which the document user will be created in the database
// mongoose helps interact with mongodb
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// the models object is provided by mongoose library, it contains all the registered models
// if the model is already registered, we use it, else we create a new model

const User = models.User || model("User", UserSchema);

export default User;
