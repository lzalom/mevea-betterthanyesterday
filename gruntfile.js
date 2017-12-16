module.exports = function(grunt) {
     grunt.initConfig({

         less: {
             development: {
                 options: {
                     paths: ["css"]
                 },
                 files: {"css/default.css": "less/default.less"}
             },
             production: {
                 options: {
                     paths: ["css"],
                     cleancss: true
                 },
                 files: {"css/default.css": "less/default.less"}
             }
         }, 
          watch: {
            options: {
              livereload: true,
            },
            css: {
              files: ['less/*.less'],
              tasks: ['less'],
            },
          }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.registerTask('default', ['less']);
 };