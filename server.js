const express = require("express");
const server = express();
const db = require('./database')
const mysql = require('mysql');
const path = require("path");


server.use(express.static(path.join(__dirname, '/public')))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, '/views'))

const PORT = 8080;
const indexRouter = require('./routes/index.route');


server.use("/", indexRouter)


server.listen(PORT, () => {
	console.log('Running for my life on port:', PORT)
})