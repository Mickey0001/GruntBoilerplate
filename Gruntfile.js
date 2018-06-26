module.exports = function(grunt){
  //Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/styles.css'
      }
    }
  });
  //Load a plugin
  grunt.loadNpmTasks('grunt-contrib-concat');

  //Register tasks
  grunt.registerTask('concat-js', ['concat:js']);

}