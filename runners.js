
var exports = module.exports = {};

var Applicant = function(name, surname) {
    return {
        name: name,
        surname, surname
    }
}

var Runner = function(id, name, surname, sponsor) {
    return {
        id: id,
        name: name,
        surname: surname,
        sponsor: sponsor
    }
}

var Sponsor = function(id, name) {
    return {
        id: id,
        name: name
    }
}

/******************************************************************************
 * Runners
 */
var runners = [];

/******************************************************************************
 * Sponsors
 */
 var sponsors = [
    new Sponsor(0, "McBurger"),
    new Sponsor(1, "BuzzCola"),
    new Sponsor(2, "Nakidas")
]

var selectRandomSponsor = function() {
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return sponsors[getRandomInt(0, 2)];
}

var createSponsor = function(sponsorName) {
    // TODO: create sponsor
    var sponsor = new Sponsor(sponsors.length, sponsorName);
    sponsors.push(sponsor);

    return sponsor;
}

/******************************************************************************
 * Sign up
 */

// sorry, no random!
var ids = [780, 189, 105, 008, 020];
var lastIx = 0;
var generateId = function() {
    var id = ids[lastIx];
    lastIx = (lastIx + 1) % ids.length;
    return id;
}

var signupFree = function(applicant) {
    var runner = signup(applicant, selectRandomSponsor);
    return runner;
}

var signupWithSponsor = function(applicant, sponsorName) {

    var selectMySponsor = function() {
        return createSponsor(sponsorName);
    }

    var runner = signup(applicant, selectMySponsor);
    return runner;
}

var signup = function(applicant, sponsorGenerator) {
    var id = generateId();
    var sponsor = sponsorGenerator();
    var runner = new Runner(id, applicant.name, applicant.surname, sponsor);

    runners.push(runner);
    return runner;
}

/******************************************************************************
 * Main
 */

var Barry = new Applicant("Barry", "Allen");
var Pietro = new Applicant("Pietro", "Maximoff");
var Jesse = new Applicant("Jesse", "Chambers");
var Robert = new Applicant("Robert", "Frank");

var Flash = signupFree(Barry);
var Quicksilver = signupWithSponsor(Pietro, "MarvDC");
var LibertyBelle = signupFree(Jesse);
var Whizzer = signupWithSponsor(Robert, "DCMarv");

/******************************************************************************
 * API
 */
exports.list = function() {
    return runners;
}

exports.get = function(id) {
    return runners.filter(runner => runner.id == id)[0];
}