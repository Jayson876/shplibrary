const router = require("express").Router()
const queries = require('../services/index.services')

router.get("/", async (req, res) =>{
    try {
        const bookCat  = await queries.getQuery("SELECT * FROM shplibrary.book_cat");
        res.render("index", {bookCat})
    }
    catch {
        throw err;
    }

    
})

module.exports = router