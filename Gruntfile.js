module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
 
  grunt.registerTask('default', ['browserify', 'exorcise']);
 
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