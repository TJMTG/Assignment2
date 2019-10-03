module.exports = function(app, formidable){
    app.post("/image/upload", (req, res) => {
        var form = new formidable.IncomingForm({ uploadDir: "./images"});
        form.keepExtensions = true;

        form.on("error", function(err){
            throw err;
        });

        //renaming
        form.on("fileBegin", function(name, file){
            file.path = form.uploadDir + "/" + file.name;
        });

        form.on("file", function(field, file){
            res.send({
                result: "ok",
                data: {"filename":file.name, "size":file.size},
                numberOfImages: 1,
                message: "Image uploaded."
            });
        });

        form.parse(req);

    });
}