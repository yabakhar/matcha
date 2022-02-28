const fs = require("fs");
const base64toimg = (element) => 
{
    var base64Data;
    var time;
    base64Data = element.replace(/data:.*;base64,/, "");
    time = new Date().getTime() + Math.random();
    fs.writeFile(`gallery/${time}.png`, base64Data, 'base64', function(err) {
    if (err)
    {
        return "error"
    }
    });
    return `gallery/${time}.png`;
}
module.exports = { base64toimg }