/**
 * User Seeder
 */
const User = require('../../models').user;
const mongoose = require('mongoose');
//const Category = require('../../models').category;
module.exports = function(app) {
    app.get('/setup', function(req, res) {
        //seed database
        let starterTodos = [{
            name: "Administrator",
            mobile: 9717219898,
            email: 'admin@node.com',
            password: 1234567,
            doj:10/10/2015,
            total_score: 10
        }];

        User.find({name: "Administrator"}).then((result) => {
            if(result){
                res.send("DB already seeded.");
            }
        }).catch((err) => {
            throw err;
        });

        User.create(starterTodos, function(err, results) {
            const admin = results;
        });

        /* add categories 
        let seederCategory = [{
            name: "Bollywood",
            picture: "files/Polls1/1498120641763book.jpg"
        },
        {
            name: "MONEY",
            picture: "files/Polls1/1498120662811image.jpg"
        },
        {
            name: "Maths",
            picture: "files/Polls1/1498120683292jhon.jpg"
        },
        {
            name: "Grammer",
            picture: "files/Polls1/1498120709363logo1.png"
        },
        {
            name: "PERSONAL",
            picture: "files/Polls1/1498120734670logo3.jpg"
        },
        {
            name: "RANDOM",
            picture: "files/Polls1/1498120953950logo2.jpg"
        }];

        //check the category seed 
        category.find({}).then((data) => {
            res.send("DB already seeded.");
        }).catch((err) => {
            throw err;
        });
        
        Category.insertMany(seederCategory, function(err, results) {
            if(err) throw err;
        })
        .then()
        .catch((err) => {
            throw err;
        });

        */
        res.send("DB seeded");
        
    });
}