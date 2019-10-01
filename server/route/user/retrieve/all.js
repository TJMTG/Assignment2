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
    app.post("/user/retrieve/all", function(req,res){
        console.log("/user/retrieve/all");
        const collection = db.collection("users");
        collection.find({}).toArray((err, results)=>{
            if(err) throw err;
            let message = "Found all, returning data.";
            console.log(message);
            //console.log(results);
            res.send({"ok":true, "message":message, "results":results})
        });
    });
}