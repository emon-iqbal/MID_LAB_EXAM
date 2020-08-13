var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Admin/dashboard');
});

router.post('/', function(req, res)
{

	if(req.body.submit)
	{
		res.render('Admin/Admin/AddEmpLoyee');
	}
	else if(req.body.view)
	{
		res.render('Admin/Admin/AllEmpList');
	}
	else
	{	
		res.send('CANNOT FOUND any button click');
	}
	
});

module.exports = router;
