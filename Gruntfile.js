module.exports = function(grunt){
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		

    express: {
        options: {
          // debug: true,
        },
        dev: {
          options: {
            script: 'server.js'
          }
        },
        test: {
          options: {
            script: 'path/to/test/server.js'
          }
        }
    },

		watch: {
      options: {
        livereload: true,  
      },
      html: {
        files: ['src/*.html'],
        task: ['log'],
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
    }
	});

	// grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// grunt.registerTask('default', ['express:dev', 'watch']);


	grunt.registerTask('log', 'Log some stuff.', function () {
		grunt.log.write('Logging some stuff...').ok();
	});

  grunt.registerTask('reload', ['tinylr-start', 'watch']);
  grunt.registerTask('server', [ 'express:dev', 'watch' ])
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('tiny-lr');
  grunt.loadNpmTasks('grunt-express-server');
};
