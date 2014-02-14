module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // COMPILE TASKS
    coffee: { 
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'src/js',
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
          cwd: 'src/styles',
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
    // CONCAT into index.js
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/app.js', 'src/js/tazz.js'],
        dest: 'build/index.js',
      },
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
        cwd: 'src/styles/',
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
        tasks: ['concat:dist'],
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
          'build/*.html',
          'build/*.js',
          'build/assets/**',
        ],
        options: {
          livereload: true,  
        },
      },
      watch_build_css: {
        files: ['build/*.css']
      },
      livereload: {
        files: ['build/*.css'],
        options: { livereload: true }
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

    // Grunt Icon: 

    grunticon: {
      myIcons: {
              files: [{
                  expand: true,
                  cwd: 'icons',
                  src: ['*.svg', '*.png'],
                  dest: 'src/styles/library/icons'
              }],
          options: {
            datasvgcss: '_icons-data-svg.scss',
            datapngcss: '_icons-data-png.scss',
            urlpngcss: 'icons-fallback.css',
            cssprefix: '%icon-',
            defaultWidth: '128px',
            defaultHeight: '128px',
        }
      }
    },

    // ICON FONT

    font: {
      all: {
        // SVG files to reed in
        src: ['icons/*.svg'],

        // Location to output CSS variables
        destCss: 'src/styles/library/icons/fontsmith.scss',

        // Location to output fonts (expanded via brace expansion)
        destFonts: 'build/assets/fonts/icons.{svg,woff,eot,ttf}',

        // Multiple CSS outputs supported (generated .styl and .json files)
        // destCss: 'actual_files/font.{styl,json}',

        // Alternative formats (1)
        // destCss:[
        //   'actual_files/font.styl',
        //   'actual_files/font.json'
        // ],
        // destFonts: [
        //   'actual_files/font.svg',
        //   'actual_files/font.woff',
        //   'actual_files/font.eot'
        // ],

        // // Alternative formats (2)
        // destFonts: {
        //   // Override specific engines
        //   json: 'actual_files/font.less',
        //   styl: 'actual_files/font.json'
        // },
        // destFonts: {
        //   // Override specific engines
        //   'dev-svg': 'actual_files/font.svg',
        //   woff: 'actual_files/font.waffles',
        //   eot: 'actual_files/more.like.eof'
        // },

        // OPTIONAL: Specify CSS format (inferred from destCss' extension by default)
            // (stylus, less, scss, json)
        // cssFormat: 'json',

        // Optional: Custom routing of font filepaths for CSS
        // cssRouter: function (fontpath) {
        //   return 'mysubfolder/' + fontpath;
        // },

        // // Optional: Custom naming of font families for multi-task support
        // fontFamily: 'my-icon-font',

        // // OPTIONAL: Specify CSS options
        // cssOptions: {}
      }
    },



  });

  grunt.registerTask('log', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok();
  });
  grunt.registerTask('inital_compile', [ 'sass', 'jade', 'coffee', 'concat', 'copy' ]);
  grunt.registerTask('server', [ 'connect:server:keepalive' ]);
  grunt.registerTask('default', [ 'copy', 'inital_compile', 'concurrent:watch_serve_reload' ]);
  
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
  grunt.loadNpmTasks('grunt-fontsmith');
};
