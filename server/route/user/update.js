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
    console.log("| Inside 'user/update.js'.");
    console.log("|     value inputed for ->");
    console.log("|     value inputed for ->");
    console.log("+-------------------------------------------/");
    console.log();
    app.post("/user/update",function(req,res){
        if(!req.body){
            console.log();
            return res.sendStatus(400)
        }
        user = req.body //create new variable to handle inputed information
        const collection = db.collection("users");
        //do mongo query
        //do stuff with results
    });
}