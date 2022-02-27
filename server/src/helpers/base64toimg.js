const fs = require("fs");
const base64toimg = (element) => 
{
    var base64Data;
    var time;
    base64Data = element.replace(/data:.*;base64,/, "");
    time = new Date().getTime();
    fs.writeFile(`gallery/${time}.png`, base64Data, 'base64', function(err) {
        if (err)
        {
            return res.status(400).json({
                status: 400,
                message: "parsing image error"
            });
        }
    });
    return `gallery/${time}.png`;
}
module.exports = { base64toimg }