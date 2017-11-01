var math = require('mathjs');

var expression = math.atan2(3, -3) / math.pi;

document.getElementById('expression').innerHTML = "<div>" + expression + "</div>";