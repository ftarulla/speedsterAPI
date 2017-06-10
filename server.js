var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var help = require("./help.js");
var tracks = require("./tracks.js");
var runners = require("./runners.js");
var webcams = require("./webcams.js");

var version = {
    id: '0.1.1',
    name: 'fastspeedster',
    lastupdate: Date.now()
}


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will be /api/whatever
app.use('/api', router);

// Home -> Help
router.get('/', function(req, res) {
    console.log("GET /");
    res.json(help.list());
});

// Tracks
var urlTrack = '/tracks/';
router.route(urlTrack)
    .get(function(req, res) {
        console.log("GET: " + urlTrack);
        console.log("Getting tracks list...");

        var response = {
            tracks: tracks.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlTrack + ':track_id')
    .get(function(req, res) {
        console.log("GET: " + urlTrack + ':track_id');

        var id = req.params.track_id;
        console.log(id);

        var track = tracks.get(id);
        console.log(track);

        if (!track) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Track inexistente.');

            return;
        }

        var response = {
            track: track,
            version: version
        }
        res.json(response);
    });

// Runner
var urlRunner = '/runners/';
router.route(urlRunner)
    .get(function(req, res) {
        console.log("GET: " + urlRunner);
        console.log("Getting runners list...");

        var response = {
            runners: runners.list(),
            version: version
        }
        res.json(response);
    });

router.route(urlRunner + ':runner_id')
    .get(function(req, res) {
        console.log("GET: " + urlRunner + ':runner_id');

        var id = req.params.runner_id;
        console.log(id);

        var runner = runners.get(id);
        console.log(runner);

        if (!runner) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Runner inexistente.');

            return;
        }

        var response = {
            runner: runner,
            version: version
        }
        res.json(response);
    });

//
var urlWebcam = '/webcams/';
router.route(urlWebcam + ':track_id')
    .get(function(req, res) {
        console.log("GET: " + urlWebcam + ':track_id');

        var trackId = req.params.track_id;
        console.log(trackId);

        var webcamByTrack = webcams.list(trackId);
        console.log(webcamByTrack);

        if (!webcamByTrack) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Cámaras inexistentes.');

            return;
        }

        var response = {
            track_id: webcamByTrack.trackId,
            webcams: webcamByTrack.webcams,
            version: version
        }
        res.json(response);
    });

router.route(urlWebcam + ':track_id' + "/" + ":webcam_id")
    .get(function(req, res) {
        console.log("GET: " + urlWebcam + ':track_id' + "/" + ":webcam_id");

        var trackId = req.params.track_id;
        var webcamId = req.params.webcam_id;
        console.log(trackId);
        console.log(webcamId);

        var webcam = webcams.get(trackId, webcamId);
        console.log(webcam);

        if (!webcam) {
            // http://stackoverflow.com/questions/8393275/how-to-programmatically-send-a-404-response-with-express-node
            res.status(404)
               .send('Runner inexistente.');

            return;
        }

        var response = {
            webcam: webcam,
            version: version
        }
        res.json(response);
    });

// Server up!
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});


//limitless-falls-59407