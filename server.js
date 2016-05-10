var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    middleware = require('./middleware.js');
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication, function(req, res) {
    res.send('Hi About Us');
});
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
    console.log('Express server stared on port ' + port);
})
