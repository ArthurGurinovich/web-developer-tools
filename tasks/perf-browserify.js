"use strict";

module.exports = function(grunt){
    return {
        performanceBrowserify: function (){
            var msg = 'Start check performance...';
            grunt.verbose.write(msg);
            try {
                grunt.task.run('browserify');
                grunt.verbose.ok();
            } catch(e) {
                grunt.verbose.or.write(msg).error().error(e.message);
                grunt.fail.warn('Something went wrong.');
            }
        }

    }
}