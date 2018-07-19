//API Function
let userModel = require('../models/user');
var async = require('async');
exports.getUser = (req, res) => {
async.series({
	users: function(callback){
	var a=[
		"abc",
		"bca",
		"cba"
	]
	res.send(a);
	
	},

	two:function(callback){
		console.log("Hellow");
		res.send(a);
		callback(a);
	}
},function(err, results) {
	let data= {
		status: true,
		message: "All users data",
		error: false,
		dara: results
	}
	res.send(data);
})

}
  
exports.postUser= (req, res)=>{
	let data={

		status:true,
		message:" Post Request",
		error: false,
		data:[]	
	}
	res.send(data);
}