module.exports = function(app, db) {
    app.post("/user/login", function(req, res){
        let username = req.body.username.toString();
        let password = req.body.password.toString();
        let collection = db.collection("users");
        collection.find({"username":username, "password":password}).toArray((err, result)=>{
            if(err) throw err;
            if(result.length == 1){
                let message = "Match found.";
                console.log(message);
                console.log(result);
                res.send({"ok":true, "message":message, "role":result[0].role});
            } else {
                let message = "No match found.";
                console.log(message);
                console.log(result);
                res.send({"ok":false, "message":message});
            }
        });
    });
}