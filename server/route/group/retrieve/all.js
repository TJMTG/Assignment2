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
    app.post("/group/retrieve/all", function(req,res){
        console.log("/group/retrieve/all");
        const collection = db.collection("groups");
        collection.find({}).toArray((err, results)=>{
            if(err) throw err;
            let message = "Found all, returning data.";
            console.log(message);
            //console.log(results);
            res.send({"ok":true, "message":message, "results":results})
        });
    });
}