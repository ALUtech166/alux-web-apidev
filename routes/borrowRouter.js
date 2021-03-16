import express from "express";
import { borrowBook, returnBook, viewAllBorrowedBook, viewBorrowedBook, viewUserBorrowedBook } from '../controllers/BorrowsController.js'

const BorrowsRouter = express.Router();

//Add a Book
BorrowsRouter.post("/", borrowBook);

//View a Book Books/:id
BorrowsRouter.get("/:id", viewBorrowedBook);

//View all Books Books/
BorrowsRouter.get("/", viewAllBorrowedBook);

//Update Book record Books/
BorrowsRouter.put("/bymember/:member_name", viewUserBorrowedBook);

//Delete a Book Books/:id
BorrowsRouter.delete("/:id", returnBook);

export default BorrowsRouter;
