module.exports = function(grunt){
  
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
        watch_serve_reload: ['server', 'watch'],
        options: {
                logConcurrentOutput: true
            }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: 'src'
        }
      }
    },

    watch: {
      options: {
        livereload: true,  
      },
      jade: {
        files: ['src/*.jade'],
        tasks: ['jade'],
      },
      html: {
        files: ['src/*.html'],
        tasks: ['log'],
      },
      scripts: {
        files: [ 'src/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: 'src/*.sass',
        tasks: ['sass'],
      },
      reload: {
        files: ['src/*.html', 'src/*.js', 'src/*.css', 'src/*.{png,jpg}'],
        tasks: 'tinylr-reload'
      },
    },

    sass: {
      dist: {
        options: {
                style: 'expanded',
                lineNumbers: true,
                compass: true,
        },
        files: {
          'src/proto.css': 'src/proto.sass'
        }

      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [ {
          expand: true,
          src: 'src/*.jade',
          ext: '.html',
        } ]
      }
    },
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // grunt.registerTask('default', ['express:dev', 'watch']);


  grunt.registerTask('log', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok();
  });

  // grunt.registerTask('reload', ['tinylr-start', 'watch']);
  // grunt.registerTask('server', [ 'watch', 'connect:keepalive' ])
  grunt.registerTask('inital_compile', [ 'sass', 'jade' ]);
  grunt.registerTask('server', [ 'connect:server:keepalive' ]);
  grunt.registerTask('default', [ 'inital_compile', 'concurrent:watch_serve_reload' ]);
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('tiny-lr');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jade');
};
