module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'application/*.js', 'application/modules/**/*.js', 'application/common/**/*.js', 'application/common/**/**/*.js']
    },
    watch: {
      dev: {
        files: ['Gruntfile.js', 'application/common/*.js', 'application/modules/**/*.js', 'application/modules/**/*.html', 'application/common/**/*.js', 'application/common/**/**/*.js', 'application/common/**/*.html', 'application/common/**/**/*.html', 'application/*.css', 'application/index.html'],
        tasks: ['jshint'],
        options: {
          atBegin: true
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000
        }
      }
    }
  });

  // Load tasks and register tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Main Tasks
  // Development - Build the app and run it on a webserver
  grunt.registerTask('dev', ['connect:server', 'watch:dev']);
};
