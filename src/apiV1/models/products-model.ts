import { model, Schema } from "mongoose"

var UsersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  price: Number
}, { collection: "books" });

export const books = model('books', UsersSchema);