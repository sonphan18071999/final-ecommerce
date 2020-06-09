//sonp
//D1yLv88lvgsofRzm
// dotenv.config({ path: './database.env' })
//Link https://topdev.vn/blog/nhap-mon-nodejs-api-authentication-crud-cho-nguoi-moi-hoc/
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
// const routes = require('./src/routes/routes')
const mongoose = require('mongoose')
 
const app = express()
const PORT = process.env.PORT || 3000
const db = mongoose.connection;
 
 
// for parsing application/json
app.use(bodyParser.json()); 
 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

//account
const account = require('./src/routes/mainRoute.js'); 
app.use('/account',account);


dotenv.config({ path: './database.env' })
 
//connect db
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => console.log('DB Connected!'));
db.on('error', (err) => {
    console.log('DB connection error:', err.message);
})
 
//Login
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);


app.use(morgan("dev"))

app.use(expressValidator())



app.use(express.static(__dirname+'/public'))
// app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendFile('index.html');
});
 
app.listen(PORT, () => {console.log("Server started on http://localhost:"+PORT)})
 
module.exports = app;
