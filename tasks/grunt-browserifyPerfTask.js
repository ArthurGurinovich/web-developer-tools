module.exports = function(grunt){
    "use strict";
    var tasks = require('./perf-browserify.js')(grunt);
    grunt.registerTask('pBrowserify', 'Run browserify performance test', tasks.performanceBrowserify);
}