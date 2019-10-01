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
    app.post("/group/delete", function(req,res){
        console.log("/group/delete");
        if(!req.body){
            return res.sendStatus(400)
        }
        //const groupCollection = await db.collection("group");
        const userCollection = db.collection("groups");
        let query = {username: req.body.username};
        //let resultOne = await channelCollection.deleteMany()
        userCollection.deleteOne(query, (err, results)=>{
            if(err) throw err;
            let message = "User '" + req.body.username + "' deleted.";
            console.log(message);
            //console.log(message);
            res.send({"ok":true, "message":message});
        });
    });
}