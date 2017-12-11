module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
 
  grunt.registerTask('default', ['browserify', 'eBrowserify']);
  require('./tasks/grunt-browserifyTask.js')(grunt);
  require('./tasks/grunt-browserifyPerfTask.js')(grunt); 
  require('time-grunt')(grunt);
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      main: {
        options: {
          browserifyOptions: {
            debug: true
          }
        },
        src: './app.js',
        dest: './src/bundle.js'
      }
    },
    exorcise: {
      bundle: {
        options: {},
        files: {
          './src/bundle.map.js': ['./src/bundle.js'],
        }
      }
    }
  });
}