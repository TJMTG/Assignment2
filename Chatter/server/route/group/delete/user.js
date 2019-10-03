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

module.exports = function(db, app, ObjectID){
    app.post("/group/delete/user", function(req,res){
        console.log("/group/delete/user");
        if(!req.body){
            return res.sendStatus(400)
        }
        const collection = db.collection("groups");
        let query = {_id: ObjectID(req.body.mongoID)};
        let values = { $pull: { users: req.body.name}};
        collection.updateOne(query, values, (err, results)=>{
            if(err) throw err;
            let message = "User '" + req.body.name + "' removed from group.";
            console.log(message);
            res.send({"ok":true, "message":message});
        });
    });
}

//{ $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } },