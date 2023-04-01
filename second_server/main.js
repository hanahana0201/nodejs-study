const port = 3000,
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer(),
	getJSONString = obj => {
		return JSON.stringify(obj,null,0);
	};

app.on("request",(req, res)=>{
	var body = [];

	req.on("data",(bodyData) => {
		body.push(bodyData);
	});

	req.on("end",() => {
		body = Buffer.concat(body).toString();
		console.log(`Request Body Contents : ${body}`);
	});

	console.log(`Method : ${getJSONString(req.method)}`);
	console.log(`URL : ${getJSONString(req.url)}`);
	console.log(`Header : ${getJSONString(req.headers)}`);

	res.writeHead(httpStatus.OK,{
		"Content-Type":"text/html"
	});

	let responseMessage = "<h1>This will showon the screen.</h1>";
	res.end(responseMessage);

});

app.listen(port);
console.log(`The server has started and is listening on por number : ${port}`);
