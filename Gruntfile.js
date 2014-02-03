module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



// NEW ORDER (haha)

// - copy:
  // - if index.html
  // - if templates/.html
  // - assets
    // - if css
    // - if js
    // - if images
    // - if fonts

// - compile:
  // - jade
  // - sass
  // - coffee

// - hint/lint
// - init (copy, compile, hint/lint, reload)
// - connect:server

// - watch
  // - index.jade, templates/.jade
  // - sass
  // - coffee
  // - if index.html
  // - if templates/.html
  // - css
  // - js
  // - images

// - concurrent
  // - watch_and_serve



    // COMPILE TASKS
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'src/assets/javascripts',
        src: ['**/*.coffee'],
        dest: 'build',
        ext: '.js',
      },
    },
    sass: {
      dist: {
        options: {
                style: 'expanded',
                lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'src/assets/stylesheets',
          src: ['*.sass'],
          dest: 'build',
          ext: '.css'
        }],
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
          cwd: 'src',
          dest: 'build',
          expand: true,
          src: '**/*.jade',
          ext: '.html',
        } ]
      }
    },

    // COPY TASKS
    copy: {
      data: {
        expand: true,
        cwd: 'data',
        src: '**/*.json',
        dest: 'build/data/'
      },

      bower_components: {
      // bower components need to be available 
        expand: true,
        cwd: 'bower_components',
        dest: 'build/bower_components',
        src: '**/*',
      },
      normalize : {
        // needs to be copied into an scss file to enable sass import :(
        src: 'bower_components/normalize-css/normalize.css',
        dest: 'src/assets/stylesheets/normalize.scss'
      },


      js: {
        expand: true,
        cwd: 'src/assets/javascripts',
        src: '**/*.js',
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
      },

      html: {
        expand: true,
        cwd: 'src/',
        src: '**/*.html',
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
      },

      css: {
        expand: true,
        cwd: 'src/assets/stylesheets/',
        src: '**/*.css',
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
      },

    },


    // WATCH
    watch: {

      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:html'],
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['copy:css'],
      },
      js: {
        files: [ 'src/**/*.js'],
        tasks: ['copy:js'],
      },

      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade'],
      },

      coffee: {
        files: [ 'src/**/*.coffee' ],
        tasks: [ 'coffee' ],
      },
      sass: {
        files: 'src/**/*.sass',
        tasks: ['sass'],
      },
      data: {
        files: 'data/**/*.*',
        tasks: 'copy:data'
      },
      watch_build: {
        files: [
          'build/*.css',
          'build/*.html',
          'build/*.js',
          'build/assets/**',
        ],
        options: {
          livereload: true,  
        },

      },
    },



  //   jshint: {
  //     all: [ 'Gruntfile.js', 'src/**/*.js' ]
  //   },

    // CONNECT SERVER
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'build'
        }
      }
    },

    // CONCURRENT FOR WATCH AND SERVE
    concurrent: {
        watch_serve_reload: ['server', 'watch'],
        options: {
                logConcurrentOutput: true
            }
    },



  });

  grunt.registerTask('log', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok();
  });
  grunt.registerTask('inital_compile', [ 'sass', 'jade', 'coffee', 'copy' ]);
  grunt.registerTask('server', [ 'connect:server:keepalive' ]);
  grunt.registerTask('default', [ 'copy:normalize', 'inital_compile', 'concurrent:watch_serve_reload' ]);
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('tiny-lr');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
};
