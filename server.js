const express = require('express');
const app = express();
PORT = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/src'));

app.get('/hearbeat', function(req, res){
    res.json({
        is: 'working'
    });
});


app.listen(PORT, function(){
    console.log(`The server at port ${PORT} is listening`)
});
