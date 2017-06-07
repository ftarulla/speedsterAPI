
var exports = module.exports = {};

var Coordinate = function(lon, lat) {
    return {
        lon: lon,
        lat: lat
    }
}

var tracks = [{
        id: 42,
        coordinates: [
            new Coordinate(-58.6998921,-34.5204229),
            new Coordinate(-58.7019575,-34.5223897),
            new Coordinate(-58.7002516,-34.5236715),
            new Coordinate(-58.7001067,-34.5236891),
            new Coordinate(-58.6982131,-34.5218638),
            new Coordinate(-58.6998921,-34.5204229)
        ]
    }
]

exports.list = function() {
    return tracks;
}

exports.get = function(id) {
    return tracks.filter(track => track.id == id)[0];
}