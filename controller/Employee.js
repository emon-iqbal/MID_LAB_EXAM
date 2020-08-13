var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Employee/emp_home');
});

router.post('/', function(req, res)
{

	if(req.body.submit)
	{
		res.render('Employee/Employee/MyProfile');
	}
	else if(req.body.update)
	{
		res.render('Employee/Employee/UpdateProfile');
	}
	else
	{	
		res.send('CANNOT FOUND any button click');
	}
	
});

module.exports = router;