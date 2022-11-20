
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const dbConfig = require("./config/db.config");


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

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};





app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))


if(process.env.MODE === 'development'){
    app.use(morgan('dev'))
}
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "voluntegreen-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to voluntegreen application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/userpage.router")(app);
require("./routes/dampak")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
