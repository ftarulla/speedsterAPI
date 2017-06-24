
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var WaterStop = function(id, coordinate) {
    return {
        id: id,
        coordinate: coordinate
    }
}

var waterstops = [
    new WaterStop(18, new Coordinate(-34.522977, -58.696872)),
    new WaterStop(09, new Coordinate(-34.521147, -58.699050)),
    new WaterStop(81, new Coordinate(-34.521359, -58.700927))]

exports.list = function() {
    return waterstops;
}

exports.get = function(id) {
    return waterstops.filter(waterstop => waterstop.id == id)[0];
}