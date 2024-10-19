import { books } from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const allBooks = await books.find({});
    return res.status(200).json({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ msg: "Enter all fields" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await books.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ msg: "Enter all fields" });
    }

    const { id } = req.params;

    const foundBook = await books.findByIdAndUpdate(id, req.body);

    if (!foundBook) {
      return res.status(404).json({ message: "Not Found" });
    }

    return res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundBook = await books.findByIdAndDelete(id);

    if (!foundBook) {
      return res.status(404).json({ message: "Not Found" });
    }

    return res.status(200).send({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
