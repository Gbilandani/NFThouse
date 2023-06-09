const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const propertyRoute = require('./routes/propertyRoutes.js');
const uploadController = require('./controller/uploadController.js');

const path = require('path');
const authController = require('./controller/authController.js');
const userController = require('./controller/userController.js');
const commentController = require('./controller/commentController.js');

require('./initDB.js')();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))


app.use('/public',express.static(path.join(__dirname,'public')))
app.use('/property', propertyRoute);
app.use('/upload', uploadController)
app.use("/auth", authController);

app.use('/user', userController)
app.use('/comment', commentController)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});