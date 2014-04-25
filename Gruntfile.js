module.exports = function (grunt) {

    grunt.registerTask('inital_compile', [ 'sass', 'jade', 'coffee', 'concat', 'copy' ]);
    grunt.registerTask('server', [ 'connect:server:keepalive' ]);
    grunt.registerTask('default', [ 'inital_compile', 'concurrent:watch_serve_reload' ]);

    //load the various task configuration files
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);

    // load the modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('tiny-lr');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-grunticon');
}