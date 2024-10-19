import { Router } from "express";
import {
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/bookStoreControllers.js";

const router = Router();

router.get("/books", getBooks);

router.post("/books/create", createBook);

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBookById);

router.delete("/books/:id", deleteBookById);

export default router;
