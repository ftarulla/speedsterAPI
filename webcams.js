
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var Webcam = function(id, coordinate, frecuency) {
    return {
        id: id,
        coordinate: coordinate,
        frecuency: frecuency
    }
}

var webcamsByTrack = [{
    trackId: 42,
    webcams:[
        new Webcam(2, new Coordinate(-34.523035, -58.696795), 10),
        new Webcam(4, new Coordinate(-34.521109, -58.699086), 15),
        new Webcam(24, new Coordinate(-34.521303, -58.700831), 25),
        new Webcam(07, new Coordinate(-34.522610, -58.701643), 25),
        new Webcam(08, new Coordinate(-34.523131, -58.700948), 15),
        new Webcam(86, new Coordinate(-34.523691, -58.700173), 30)]
    }
]

exports.list = function(trackId) {
    return webcamsByTrack.filter(wbt => wbt.trackId == trackId)[0];
}

exports.get = function(trackId, webcamId) {
    var wbt = webcamsByTrack.filter(wbt => wbt.trackId == trackId)[0];

    if(!wbt) {
        return null;
    }

    return wbt.webcams.filter(webcam => webcam.id == webcamId)[0];
}