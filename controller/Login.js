var express = require('express');
var router = express.Router();

router.get('/', 
	function(req, res)
	{
		res.render('login/log');
	}
);

router.post('/', function(req, res)
{

	if(req.body.uname == "emon" && req.body.pass == "112134"){
		res.redirect('/admin');
	}
	else if(req.body.uname == "rahim" && req.body.pass == "ram315"){
		res.redirect('/employee');
	}
	else{
		res.send(' ** invalid name/password...PLEASE TRY AGAIN');
	}
	
});

module.exports = router;
