
var runnerService = require("./runners.js");

//
var runners = runnerService.list();

//
var positions = [];
var position0 = {
    runner: runners[0].id,
    positions: [
        {lat: -34.522739, lon: -58.702329},
        {lat: -34.522992, lon: -58.702572},
        {lat: -34.523191, lon: -58.702801},
        {lat: -34.523412, lon: -58.703056},
        {lat: -34.523643, lon: -58.703299}
    ]
}
positions.push(position0);



/******************************************************************************
 * API
 */
exports.list = function() {
    return positions;
}

exports.get = function(runnerId) {
    return positions.filter(position => position.runner == runnerId)[0];
    //return positions[runnerId];
}