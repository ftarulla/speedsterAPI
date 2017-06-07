
var exports = module.exports = {};

var Coordinate = function(lat, lon) {
    return {
        lat: lat,
        lon: lon
    }
}

var tracks = [{
        id: 42,
        coordinates: [
            new Coordinate(-34.524309,-58.695315),
            new Coordinate(-34.521865, -58.698213),
            new Coordinate(-34.520437, -58.699889),
            new Coordinate(-34.522388, -58.701957),
            new Coordinate(-34.523579, -58.700350)
        ]
    }
]

exports.list = function() {
    return tracks;
}

exports.get = function(id) {
    return tracks.filter(track => track.id == id)[0];
}