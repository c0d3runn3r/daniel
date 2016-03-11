var express = require('express');
var app = express();
var router=express.Router();

app.use('/api', router);


router.post('/customer/:customer_id/payments', function(req, res) {

	res.status(200).send("Now you want me to SAVE data???");

});


router.get('/customer/:customer_id/payments', function(req, res) {

	res.status(200).send('I have not implemented a non-json response for customer ' + req.params.customer_id);

});
router.get('/customer/:customer_id/payments.json', function(req, res) {


	// Imaginary payment data
	var data={

		"customer_id"	:	0,
		"payments"		:	[

			{
				"id"		:		6000,
				"amount"	:		99.95
			},
			{
				"id"		:		6001,
				"amount"	:		5.00
			}
		]

	};

	data.customer_id=req.params.customer_id;
	res.status(200).json(data); 
});



// Start the server
var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});


