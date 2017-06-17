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
            },
            '/api/webcams/:track_id': {
                "descripción": "Lista las cámaras del circuito con id :track_id.",
                "ejemplo": "/api/webcams/42"
            },
            '/api/webcams/:track_id/:webcam_id': {
                "descripción": "Obtiene la cámara con id :webcam_id del circuito con id :track_id",
                "ejemplo": "/api/webcams/42/86"
            },
            // A partir de acá las urls dan a entender que el circuito está preseleccionado
            // y no se pasa en la URL ... INPOT!!
            '/api/runners/': {
                "descripción": "Lista los corredores de la carrera.",
                "ejemplo": "/api/runners/"
            },
            '/api/runners/:runner_id': {
                "descripción": "Obtiene el corredor con id :runner_id",
                "ejemplo": "/api/runners/780"
            },
            '/api/positions/': {
                "descripción": "Lista las posiciones de todos los corredores.",
                "ejemplo": "/api/positions/"
            },
            '/api/positions/:runner_id': {
                "descripción": "Obtiene las posiciones del corredor con id :runner_id",
                "ejemplo": "/api/positions/780"
            },
        }
    }
}

exports.list = function() {
    return help;
}