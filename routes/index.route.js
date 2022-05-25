const router = require("express").Router()
const queries = require('../services/index.services')

router.get("/", async (req, res) =>{
    try {
        const bookCat  = await queries.getQuery("SELECT * FROM shplibrary.book_cat");
        const featBook = await queries.getQuery("SELECT * FROM shplibrary.books WHERE feat = 1");
        const homeBooks = await queries.getQuery("SELECT * FROM shplibrary.books WHERE shplibrary.books.feat is null");
        res.render("index", {bookCat, featBook, homeBooks})
    }
    catch {
        throw err;
    } 
})

module.exports = router