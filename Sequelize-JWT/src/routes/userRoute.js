'use strict';
const express = require('express');
// userRoute object
const userRoute = express.Router();
const {
  getUser,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  signUp,
  logIn,
} = require('../controllers/userController');

// Multer middleware
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.cwd()}/public/img`);
  },
  filename: (req, file, cb) => {
    const d = new Date();
    const newName = d.getTime() + '_' + file.originalname;
    cb(null, newName);
  },
});
const upload = multer({ storage });
userRoute.post('/upload', upload.single('file'), (req, res) => {
  let fs = require('fs');
  fs.readFile(
    process.cwd() + '/public/img/' + req.file.filename,
    (err, data) => {
      let fileName = `data:${req.file.mimetype};base64,${Buffer.from(
        data
      ).toString('base64')}`;
      fs.unlinkSync(process.cwd() + '/public/img/' + req.file.filename); // delete file
      res.send(fileName);
    }
  );
  // res.send(req.file);
});

// GET
userRoute.get('/getUser/', getUser); // get all
userRoute.get('/getUserId/:id', getUserId); // get id

// POST
userRoute.post('/createUser', createUser);

// PUT
userRoute.put('/updateUser/:id', updateUser);

// DELETE
userRoute.delete('/deleteUser/:id', deleteUser);

// API signup
userRoute.post('/signup', signUp);

// API login
userRoute.post('/login', logIn);

module.exports = userRoute;
