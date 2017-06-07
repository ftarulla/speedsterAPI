var exports = module.exports = {};

var help = {
    welcome: 'Bienvenidos a Speedster API!',
    urls: {
        'GET': {
            '/api/tracks/': {
                "descripción": "Lista los circuitos de carrera.",
                "ejemplo": "/api/tracks/"
            },
            '/api/tracks/:track_id': {
                "descripción": "Obtiene el circuito con id :track_id",
                "ejemplo": "/api/tracks/42"
            }
        }
    }
}

exports.list = function() {
    return help;
}