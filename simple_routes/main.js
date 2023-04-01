const routeResponseMap = {
	"/info": "<h1>info Page</h1>",
	"/contact": "<h1>Contact Us</h1>"
}; 

const port = 3000,
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer((request,response) => {
		console.log("Received a incoming request!");
		response.writeHead(httpStatus.OK, {
			"Content-Type":"text/html"
		});

		if(routeResponseMap[request.url]){
			setTimeout(()=>response.end(routeResponseMap[request.url]),2000);
		} else{
			response.end("<h1>Welcome!</h1>");
		}
	});

app.listen(port);

console.log(`The Server has started and is listening on port number ${port}`);
