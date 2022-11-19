const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const dampakRoute = require('./routes/dampak');
//const AuthRoute = require('./routes/AuthRoutes');

const db = require('./config/db');
dotenv.config({ path: './env'})
//db()

const app = express();
app.use(express.json())
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


