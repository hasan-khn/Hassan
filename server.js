var express = require('express'),
    app = express(),
    port = 3000;
middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request : ' + new Date().toString() +
            req.method + ' ' + req.originalUrl);
        next();
    }
}
app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('Hi About Us');
});
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
    console.log('Express server stared on port ' + port);
})
