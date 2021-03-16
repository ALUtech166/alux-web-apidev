import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/BooksController.js'

const BooksRouter = express.Router();

//Add a Book
BooksRouter.post("/", addBook);

//View a Book Books/:id
BooksRouter.get("/:id", viewBook);

//View all Books Books/
BooksRouter.get("/", viewAllBooks);

//Update Book record Books/
BooksRouter.put("/:id", updateBook);

//Delete a Book Books/:id
BooksRouter.delete("/:id", deleteBook);

export default BooksRouter;
