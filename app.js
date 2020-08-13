var express= require('express');
var bodyParser= require('body-parser');
var login= require('./controller/Login');
var admin= require('./controller/Admin');
var addemp= require('./controller/Admin/AddEmpLoyee');
var emplist= require('./controller/Admin/AllEmpList');
var empupdate= require('./controller/Admin/UPDATE');
var empdelete= require('./controller/Admin/DELETE');
var employee= require('./controller/Employee');
var empro= require('./controller/Employee/MyProfile');
var updateemp= require('./controller/Employee/UpdateProfile');
var logout= require('./controller/LogOuT');
var app= express();

//config
app.set('view engine', 'ejs');

//middleware  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/Login', login);
app.use('/LogOuT', logout);
app.use('/Admin', admin);
app.use('/Admin/AddEmpLoyee', addemp);
app.use('/Admin/AllEmpList', emplist);
app.use('/Admin/UPDATE', empupdate);
app.use('/Admin/DELETE', empdelete);
app.use('/Employee', employee);
app.use('/Employee/MyProfile', empro);
app.use('/Employee/UpdateProfile', updateemp);


app.get('/', function(req, res){
	res.send("!! ~ W E L C O M E ~ T O ~ T H E ~ A R E N A ~ OF ~ R E V O L U T i O N ~ !! <br><br> <a href='/Login'> LOGiN</a> ");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});
