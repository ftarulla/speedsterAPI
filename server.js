var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var help = require("./help.js");
var tracks = require("./tracks.js");

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
// routes:
var urlTrack = '/tracks/';

// Home -> Help
router.get('/', function(req, res) {
    console.log("GET /");
    res.json(help.list());
});

// Tracks
router.route(urlTrack)
    .get(function(req, res) {
        console.log("GET: " + urlTrack);

        console.log("Getting tracks list...");

        var response = {
            tracks: tracks.list(),
            version: {
                id: '0.0.1',
                name: 'meteor',
                lastupdate: Date.now()
            }
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
            version: {
                id: '0.0.1',
                name: 'meteor',
                lastupdate: Date.now()
            }
        }
        res.json(response);
    });


// Server up!
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});


//limitless-falls-59407