import express from "express";
import membersRouter from "./membersRouter.js"

const router = express.Router();


router.use("/members", membersRouter);

export default router;