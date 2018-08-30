let resultModel = require('../models/result');
let userModel = require('../models/user');
var date = new Date();
exports.userRecords = (req, res)=>{
    userModel.find({email:req.body.email})
    .then((result)=>{
        console.log(date)
        if(result != null)
        {
            resultModel.create({
                playerEmail:req.body.email,
                quizName:req.body.quizName,
                playTime:date.toDateString(),
                total_score:req.body.total_score
            },(err, data)=>{
                const mydata={
                            data:req.body.email,
                            status:true,
                            error:false,
                            message:"user data"
                            }
                res.send(mydata);
            })
        }
        else{
            res.send("no data")
        }
    })
} 

exports.showRecords = (req, res)=>{
    resultModel.find({playerEmail:req.body.email}).sort({_id:-1}).limit(5)
    .then((result)=>{
        if(result != null)
        {
            res.send(result);
        }(err,data)=>{
            const mydata={
                data:result,
                status:true,
                error:false,
                message:"Show User Records"
            }
        }
    });
}
