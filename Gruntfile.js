module.exports = function(grunt){
  //Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
        dest: 'build/styles.css'
      }
    },
    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/styles.css'
        }]
      }
    }
  });
  //Load a plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  //Register tasks
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);

}