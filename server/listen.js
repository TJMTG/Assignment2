module.exports = function(http){
    http.listen(3000,()=>{
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      console.log(date);
      console.log("+-------------------------------------------\\");
      console.log("| Server has been started at : ", hours, ": ", minutes);
      console.log("+-------------------------------------------/");
    });
}