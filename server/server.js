const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const portfolioProjectRouter = require('./routes/portfolioProject.router');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/portfolioprojectrouter', portfolioProjectRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});