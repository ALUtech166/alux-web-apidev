import Books from "../models/books.model.js";

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




//View a Book
export async function viewBook(req, res) {
    try {
        let allBooks = await Books.findAll({where: {book_id: req.params.id}});
        if (allBooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allBooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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

//View all Books
export async function viewAllBooks(req, res) {
    try {
        let allBooks = await Books.findAll();
        if (allBooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allBooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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

//Update Book record
export async function updateBook(req, res) {
    try{
       let Book = await Books.findAll({where: {book_id: req.params.id}});
       if (Book) {
           await Books.update(req.body, {where : {book_id: req.params.id}})
           .then(flag => {
               if (flag == 1){
                   res.json({
                       success: true, 
                       message: "Book updated succusfully"
                   })
               } else {
                   res.json({
                       success: false, 
                       message: "Book was not updated"
                   })
               }
           });
           
       } else {
           res.json({
               success: false,
               message: 'No Book records found.',
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

//Delete a Book
export async function deleteBook(req, res) {
   try{
       let Book = await Books.findAll({where: {book_id: req.params.id}});
       if (Book) {
           await Books.destroy({where : {book_id: req.params.id}})
           .then(flag => {
               if (flag == 1){
                   res.json({
                       success: true, 
                       message: "Book deleted succusfully"
                   })
               } else {
                   res.json({
                       success: false, 
                       message: "Book was not deleted"
                   })
               }
           });
           
       } else {
           res.json({
               success: false,
               message: 'No Book records found.',
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
