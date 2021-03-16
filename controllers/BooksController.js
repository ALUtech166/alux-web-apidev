import Member from "../models/books.model.js";

//add new book

export async function addBook(req, res) {
    try {
        let book = await Books.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book created successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}