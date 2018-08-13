var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var ip = req.ip;
  var writer = fs.createWriteStream('output.txt');
  
  response = {
  }
  for (var propName in req.query) {
    if (req.query.hasOwnProperty(propName)) {
        response[propName]=req.query[propName];
    }
}
  response['realIP'] = ip;
  writer.write(JSON.stringify(response));

  res.send('OK');
});

/* GET users listing. */
router.get('/what/', function(req, res, next) {
    fs.readFile("output.txt", "utf8", function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

module.exports = router;
