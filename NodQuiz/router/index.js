/* require your controllers here */
let app = require('../app');
let play = require('../controllers/play');
//let temp = require('../controllers/temp');
let returnVal= require('../controllers/returnVal');
let createQuiz= require('../controllers/createQuiz');
let userDelete = require('../controllers/deleteUser');
let quizDelete = require('../controllers/deleteQuiz');
let forgot = require('../controllers/forgotPassword');
let totalUsers = require('../controllers/totalUsers');
let updateQuiz = require('../controllers/updateQuiz');
let userDetails = require('../controllers/userDetails');
let userRecords = require('../controllers/userRecords');
let showRecords = require('../controllers/userRecords');

// backend site routes
//app.post("/api/temp", temp.temp);
app.post("/api/reset", forgot.reset);
app.post("/api/forgot", forgot.forgot);
app.post("/api/getQuiz", play.getQuiz);
app.post("/api/delete", userDelete.delete);
app.post("/api/signup", returnVal.setSignup);
app.post("/api/userlogin", returnVal.setVal);
app.post("/api/createQuiz", createQuiz.setQuiz);
app.post("/api/updateQuiz", updateQuiz.updateQuiz);
app.post("/api/totalUsers", totalUsers.totalUsers);
app.post("/api/deleteQuiz", quizDelete.deleteQuiz);
app.post("/api/userDetails", userDetails.userDetails);
app.post("/api/userRecord", userRecords.userRecords);
app.post("/api/showRecords", userRecords.showRecords);

//app.get("/api/user", user.getElementsByTagName('')User);