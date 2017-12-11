"use strict";

module.exports = function(grunt){
    return {
        runBrowserify: function (){
            grunt.log.writeln('Start browserify working ...');
            grunt.task.run('browserify');
        }

    }
}