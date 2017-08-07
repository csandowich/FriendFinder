var compadres = require('../data/friend.js');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    console.log("route /api/friends");
    return res.json(compadres);
  });

  app.post("/api/friends", function(req, res) {
    var match = {
      name: "",
      photo: "",
      friendVariation: 1000
    };

    var friendData = req.body;
    var friendScore = friendData.scores;
    var totalVariation = 0;
    for (i = 0; i < compadres.length; i++) {

      totalVariation = 0;

      for ( a = 0; a < compadres[i].scores[a]; a++) {
        totalVariation += Math.floor(parseInt(friendScore[a]) - parseInt(compadres[i].scores[a]));
        if (totalVariation <= match.friendVariation) {

          match.name = compadres[i].name;
          match.photo = compadres[i].photo;
          match.friendVariation = totalVariation;

        }
      }
    }
    compadres.push(friendData);
    res.json(match);
  });

};
