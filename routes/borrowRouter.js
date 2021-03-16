import express from "express";
import { borrowBook, returnBook, viewAllBorrowedBook, viewBorrowedBook, viewUserBorrowedBook } from '../controllers/BorrowsController.js'

const BorrowsRouter = express.Router();

//Add a Book
BooksRouter.post("/", borrowBook);

//View a Book Books/:id
BooksRouter.get("/:id", viewBorrowedBook);

//View all Books Books/
BooksRouter.get("/", viewAllBorrowedBook);

//Update Book record Books/
BooksRouter.put("/:member_name", viewUserBorrowedBook);

//Delete a Book Books/:id
BooksRouter.delete("/:id", returnBook);

export default BorrowsRouter;
