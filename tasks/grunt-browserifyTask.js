module.exports = function(grunt){
    "use strict";
    var tasks = require('./run-browserify.js')(grunt);
    grunt.registerTask('eBrowserify', 'Run browserify task from external task', tasks.runBrowserify);
}