module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify: {
        //    build: {
        //        src: '**/*.js',
        //        dest: 'js/main.min.js'
        //    }
        //},


        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            },
            //scripts: {
            //    files: '**/*.js',
            //    tasks: ['uglify']
            //}
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['compass', 'watch']);

};