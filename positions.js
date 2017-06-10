
var runnerService = require("./runners.js");

var positions = {};

var runners = runnerService.list();

positions[runners[0].id] = [
    {lat: -34.522739, lon: -58.702329},
    {lat: -34.522992, lon: -58.702572},
    {lat: -34.523191, lon: -58.702801},
    {lat: -34.523412, lon: -58.703056},
    {lat: -34.523643, lon: -58.703299}
]


/******************************************************************************
 * API
 */
exports.list = function() {
    return positions;
}

exports.get = function(runnerId) {
    //return positions.filter(position => position.id == id)[0];
    return positions[runnerId];
}