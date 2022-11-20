const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const dampakRoute = require('./routes/dampak');
//const AuthRoute = require('./routes/AuthRoutes');

const fileStorage =multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file,cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter= (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null,true);
    } else {
        cb(null, false);
    }
}

const db = require('./config/db');
dotenv.config({ path: './env'})
db()

const app = express();
app.use(express.json())
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
if(process.env.MODE === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;
app.use('/api/dampak', dampakRoute)
//app.use('/api', AuthRoute)

//app.use("/api/user", AuthRoutes);



app.get('/', (req, res) => {
    res.send('API is running good')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));


