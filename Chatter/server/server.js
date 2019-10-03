//
// Import modules
//
const     express = require("express");
const         app = express();

const        http = require("http").Server(app);
const  bodyParser = require("body-parser");
const        cors = require("cors");
const          io = require("socket.io")(http);
const     sockets = require("./socket.js");
const  formidable = require("formidable");
const        path = require("path");
const MongoClient = require("mongodb").MongoClient;  
var      ObjectID = require("mongodb").ObjectID;

app.use(express.static(path.join(__dirname, "../dist/Chatter/")));
app.use("/images", express.static(path.join(__dirname, "./images")));

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {poolSize:10, useNewUrlParser:true, useUnifiedTopology:true},function(err, client) {
    //
    // Error
    //
    if(err){
        return console.log("!!!!!!!!:", err)
    }

    //
    // Database
    //
    const dbName = 'Assignment2';
    const db = client.db(dbName);
    db.listCollections().toArray(function(err, result) {
        if(err) throw err;
        console.log("the collections: ", result);
    });

    //
    // Socket
    //
    sockets.connect(app, io, db);

    //
    // User service routing (CRUD)
    //
    require("./route/user/create.js")(db,app);
    require("./route/user/retrieve/login.js")(db,app,ObjectID);
    require("./route/user/retrieve/one.js")(db,app,ObjectID);
    require("./route/user/retrieve/all.js")(db, app);
    require("./route/user/update.js")(db,app,ObjectID);
    require("./route/user/delete.js")(db,app,ObjectID);
    
    //
    // User image upload
    //
    require("./route/image/upload.js")(app, formidable);

    //
    // Group service routing (CRUD)
    //
    require("./route/group/create.js")(db,app);
    require("./route/group/retrieve/one.js")(db,app,ObjectID);
    require("./route/group/retrieve/all.js")(db,app,ObjectID);
    require("./route/group/retrieve/channels.js")(db,app,ObjectID);
    require("./route/group/update/name.js")(db,app,ObjectID);
    require("./route/group/update/users.js")(db,app,ObjectID);
    require("./route/group/update/channels.js")(db,app,ObjectID);
    require("./route/group/update/channel/user.js")(db,app,ObjectID);
    require("./route/group/update/assistants.js")(db,app,ObjectID);
    require("./route/group/delete/group.js")(db,app,ObjectID);
    require("./route/group/delete/user.js")(db,app,ObjectID);
    require("./route/group/delete/channel.js")(db,app,ObjectID);
    require("./route/group/delete/channel/user.js")(db,app,ObjectID);
    require("./route/group/delete/assistant.js")(db,app,ObjectID);
    
    //
    // Start server on port 3000
    //
    require('./listen.js')(http);
});

//
// Route testing
//
module.exports = app;