'use strict';

var fs = require('fs');

var stream = new fs.ReadStream(_filename, { enconding: 'utf-8'});

stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
});

stream.on('end', function(){
    console.log('End');
});