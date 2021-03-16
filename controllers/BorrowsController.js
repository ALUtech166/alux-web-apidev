import Borrows from "../models/borrows.model.js";

//add new book

export async function borrowBook(req, res) {
    try {
        let borrow = await Borrows.create(req.body);
        if (borrow) {
            res.status(200).json({
                success: true,
                message: 'Book borrowed successfully',
                data: borrow
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be borrowed at this time'
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
export async function viewBorrowedBook(req, res) {
    try {
        let allBorrows = await Borrows.findAll({where: {id: req.params.id}});
        if (allBorrows) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: allBorrows
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
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


//
export async function viewUserBorrowedBook(req, res) {
    try {
        let allBorrows = await Borrows.findAll({where: {member_name: req.params.member_name}});
        if (allBorrows) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: allBorrows
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
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

//View all Borrows
export async function viewAllBorrowedBook(req, res) {
    try {
        let allBorrows = await Borrows.findAll();
        if (allBorrows) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allBorrows
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


//Delete a Book
export async function returnBook(req, res) {
   try{
       let Book = await Borrows.findAll({where: {id: req.params.id}});
       if (Book) {
           await Borrows.destroy({where : {id: req.params.id}})
           .then(flag => {
               if (flag == 1){
                   res.json({
                       success: true, 
                       message: "Book returned succusfully",
                   })
               } else {
                   res.json({
                       success: false, 
                       message: "Book was not returned",
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
