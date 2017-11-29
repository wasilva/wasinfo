var http = require('http');
var  server = http.createServer(function(reg,res){
	res.end("<html><body>Portal de noticias</body></html>");
});

server.listen(3000);