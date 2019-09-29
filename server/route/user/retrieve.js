//This route takes in:
    //
    //
    //

//And does:
    //
    //
    //

//It outputs:
    //
    //
    //

module.exports = function(db, app){
    console.log("+-------------------------------------------\\");
    console.log("| Inside 'user/retrieve.js'.");
    console.log("+-------------------------------------------/");
    console.log();
    app.post("/user/retrieve",function(req,res){
        if(!req.body){
            console.log();
            return res.sendStatus(400)
        }
        const collection = db.collection("users");
        if(req.body.password){
            console.log("The value is true.");
            let username = req.body.username
            let password = req.body.password
            collection.find({"username":username, "password":password}, function(){
                res.sen({"ok":true})
            });
        } else {
            console.log("The value is false.");
        }
        //do mongo query
        //do stuff with results
    });
}