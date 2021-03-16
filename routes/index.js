import express from "express";
import membersRouter from "./membersRouter.js";
import booksRouter from "./booksRouter.js";
import borrowingRouter from "./borrowRouter.js";

const router = express.Router();


router.use("/members", membersRouter);
router.use("/books", booksRouter);
router.use("/borrowing", borrowingRouter);

export default router;