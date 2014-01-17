module.exports = funtion(grunt){
	
	grunt.initConfig({

		pkg: grunt.file.readJASON('package.json'),
		
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n'
			},
			build: {
				src: 'src/<%= pkg.name %>.min.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', ['uglify']);

	grunt.registerTask('log', 'Log some stuff.', function () {
		grunt.log.write('Logging some stuff...').ok();
	});
};
