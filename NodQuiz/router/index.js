/* require your controllers here */
let app = require('../app');
let loginController = require('../controllers/loginController');
let returnVal= require('../controllers/returnVal');
let user=require('../controllers/user');
let createQuiz= require('../controllers/createQuiz');
let play = require('../controllers/play');
let myFirstApi= require('../controllers/demoApi');
let userDetails = require('../controllers/userDetails');
let userDelete = require('../controllers/deleteUser');
let quizDelete = require('../controllers/deleteQuiz');
let forgot = require('../controllers/forgotPassword');
// backend site routes
app.get('/', loginController.index);
//app.get("/api/myfirstapi", loginController.myfirstapi);
app.get("/api/myfirstapi", myFirstApi.myFirstApi);
app.post("/api/userlogin", returnVal.setVal);
app.post("/api/signup", returnVal.setSignup);
app.post("/api/userDetails", userDetails.userDetails);
app.post("/api/createQuiz", createQuiz.setQuiz);
app.post("/api/getQuiz", play.getQuiz);
//app.get("/api/user", user.getElementsByTagName('')User);
app.post("/api/user", user.postUser);
app.post("/api/getUser", user.getUser);
app.post("/api/delete", userDelete.delete);
app.post("/api/deleteQuiz", quizDelete.deleteQuiz);
app.post("/api/forgot", forgot.forgot);
app.post("/api/reset", forgot.reset);
