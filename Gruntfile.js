module.exports = function(grunt) {
	grunt.initConfig({
		// pkg: grunt.file.readJSON('package.json'),

		sass: {
			scss: {
				files: {
					'css/app.css' : 'scss/app.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};