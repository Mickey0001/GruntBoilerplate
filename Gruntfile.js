module.exports = function(grunt){
  //Configuration
  grunt.initConfig({
    //Pass in option for plugins and refrence files
  });
  //Load a plugin
  grunt.loadNpmTasks('');

  //Register tasks
  grunt.registerTask('run', function(){
    console.log('Running!');
  });

  grunt.registerTask('sleep', function(){
    console.log('Sleeping...');
  });

  grunt.registerTask('all', ['run', 'sleep']);
}