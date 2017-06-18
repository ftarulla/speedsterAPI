
var runnerService = require("./runners.js");
//
var runners = runnerService.list();

var RunnerPosition = function(runnerId, latlon) {
    return {
        runnerId: runnerId,
        coordinate: {lat: latlon[0], lon: latlon[1]}
    }
}

// Build Reality
var moments = {
    00: [new RunnerPosition(780, [-34.524309, -58.695315]),
         new RunnerPosition(189, [-34.524309, -58.695315]),
         new RunnerPosition(105, [-34.524309, -58.695315]),
         new RunnerPosition(008, [-34.524309, -58.695315])],
    01: [new RunnerPosition(780, [-34.524048, -58.695630]),
         new RunnerPosition(189, [-34.524085, -58.695596]),
         new RunnerPosition(105, [-34.524105, -58.695573]),
         new RunnerPosition(008, [-34.524105, -58.695573])],
    02: [new RunnerPosition(780, [-34.523720, -58.696011]),
         new RunnerPosition(189, [-34.523832, -58.695882]),
         new RunnerPosition(105, [-34.523782, -58.695943]),
         new RunnerPosition(008, [-34.523739, -58.695986])],
    03: [new RunnerPosition(780, [-34.523464, -58.696311]),
         new RunnerPosition(189, [-34.523431, -58.696354]),
         new RunnerPosition(105, [-34.523397, -58.696388]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    04: [new RunnerPosition(780, [-34.523076, -58.696773]),
         new RunnerPosition(189, [-34.523107, -58.696740]),
         new RunnerPosition(105, [-34.523076, -58.696773]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    05: [new RunnerPosition(780, [-34.522426, -58.697544]),
         new RunnerPosition(189, [-34.522747, -58.697168]),
         new RunnerPosition(105, [-34.522747, -58.697168]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    06: [new RunnerPosition(780, [-34.522426, -58.697544]),
         new RunnerPosition(189, [-34.522540, -58.697409]),
         new RunnerPosition(105, [-34.522540, -58.697409]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    07: [new RunnerPosition(780, [-34.522102, -58.697934]),
         new RunnerPosition(189, [-34.522162, -58.697866]),
         new RunnerPosition(105, [-34.522128, -58.697904]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    08: [new RunnerPosition(780, [-34.521860, -58.698216]),
         new RunnerPosition(189, [-34.521860, -58.698216]),
         new RunnerPosition(105, [-34.521860, -58.698216]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    09: [new RunnerPosition(780, [-34.521464, -58.698688]),
         new RunnerPosition(189, [-34.521483, -58.698666]),
         new RunnerPosition(105, [-34.521483, -58.698666]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    10: [new RunnerPosition(780, [-34.521145, -58.699063]),
         new RunnerPosition(189, [-34.521165, -58.699041]),
         new RunnerPosition(105, [-34.521186, -58.699015]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    11: [new RunnerPosition(780, [-34.520752, -58.699518]),
         new RunnerPosition(189, [-34.520752, -58.699518]),
         new RunnerPosition(105, [-34.520752, -58.699518]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    12: [new RunnerPosition(780, [-34.520577, -58.699719]),
         new RunnerPosition(189, [-34.520577, -58.699719]),
         new RunnerPosition(105, [-34.520577, -58.699719]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    13: [new RunnerPosition(780, [-34.520481, -58.699940]),
         new RunnerPosition(189, [-34.520459, -58.699853]),
         new RunnerPosition(105, [-34.520459, -58.699853]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    14: [new RunnerPosition(780, [-34.520823, -58.700310]),
         new RunnerPosition(189, [-34.520778, -58.700269]),
         new RunnerPosition(105, [-34.520742, -58.700228]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    15: [new RunnerPosition(780, [-34.521289, -58.700821]),
         new RunnerPosition(189, [-34.521129, -58.700645]),
         new RunnerPosition(105, [-34.521129, -58.700645]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    16: [new RunnerPosition(780, [-34.521533, -58.701087]),
         new RunnerPosition(189, [-34.521457, -58.701007]),
         new RunnerPosition(105, [-34.521500, -58.701054]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    17: [new RunnerPosition(780, [-34.521765, -58.701335]),
         new RunnerPosition(189, [-34.521765, -58.701335]),
         new RunnerPosition(105, [-34.521765, -58.701335]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    18: [new RunnerPosition(780, [-34.522011, -58.701582]),
         new RunnerPosition(189, [-34.522011, -58.701582]),
         new RunnerPosition(105, [-34.522011, -58.701582]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    19: [new RunnerPosition(780, [-34.522266, -58.701836]),
         new RunnerPosition(189, [-34.522266, -58.701836]),
         new RunnerPosition(105, [-34.522266, -58.701836]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    20: [new RunnerPosition(780, [-34.522478, -58.701837]),
         new RunnerPosition(189, [-34.522396, -58.701947]),
         new RunnerPosition(105, [-34.522396, -58.701947]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    21: [new RunnerPosition(780, [-34.522575, -58.701702]),
         new RunnerPosition(189, [-34.522510, -58.701786]),
         new RunnerPosition(105, [-34.522510, -58.701786]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    22: [new RunnerPosition(780, [-34.522671, -58.701575]),
         new RunnerPosition(189, [-34.522634, -58.701626]),
         new RunnerPosition(105, [-34.522615, -58.701651]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    23: [new RunnerPosition(780, [-34.522797, -58.701407]),
         new RunnerPosition(189, [-34.522702, -58.701533]),
         new RunnerPosition(105, [-34.522725, -58.701506]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    24: [new RunnerPosition(780, [-34.523001, -58.701133]),
         new RunnerPosition(189, [-34.522825, -58.701373]),
         new RunnerPosition(105, [-34.522825, -58.701373]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    25: [new RunnerPosition(780, [-34.523192, -58.700879]),
         new RunnerPosition(189, [-34.522891, -58.701281]),
         new RunnerPosition(105, [-34.522911, -58.701254]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    26: [new RunnerPosition(780, [-34.523387, -58.700621]),
         new RunnerPosition(189, [-34.523000, -58.701136]),
         new RunnerPosition(105, [-34.523000, -58.701136]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    27: [new RunnerPosition(780, [-34.523575, -58.700367]),
         new RunnerPosition(189, [-34.523089, -58.701017]),
         new RunnerPosition(105, [-34.523105, -58.700993]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    28: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523192, -58.700878]),
         new RunnerPosition(105, [-34.523192, -58.700878]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    29: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523300, -58.700738]),
         new RunnerPosition(105, [-34.523274, -58.700769]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    30: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523382, -58.700624]),
         new RunnerPosition(105, [-34.523382, -58.700624]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    31: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523466, -58.700511]),
         new RunnerPosition(105, [-34.523486, -58.700483]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    32: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523578, -58.700366]),
         new RunnerPosition(105, [-34.523578, -58.700366]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
    33: [new RunnerPosition(780, [-34.523677, -58.700219]),
         new RunnerPosition(189, [-34.523661, -58.700246]),
         new RunnerPosition(105, [-34.523661, -58.700246]),
         new RunnerPosition(008, [-34.523371, -58.696419])],
}

var runnersPositions = {};
var receivePosition = function(runnerposition) {
    var rp = runnersPositions[runnerposition.runnerId];
    if(!rp) {
        rp = {
            runner: runnerposition.runnerId,
            positions: []
        }
        runnersPositions[runnerposition.runnerId] = rp;
    }
    rp.positions.push(runnerposition.coordinate);
}

for(var ix in moments) {
    var moment = moments[ix];
    for(var j=0; j<moment.length; j++) {
        receivePosition(moment[j]);
    }
}
//

/******************************************************************************
 * API
 */
exports.list = function() {
    var positions = []
    for(var runnerId in runnersPositions) {
        positions.push(runnersPositions[runnerId]);
    }

    return positions;
}

exports.get = function(runnerId) {
    return runnersPositions[runnerId];
    //return positions.filter(position => position.runner == runnerId)[0];
    //return positions[runnerId];
}