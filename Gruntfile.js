module.exports = function(grunt) {
	
	//config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				files: {
					'dist/flip-book.min.js': ['dist/flip-book.js']
				}
			}
		}
	});
	
	//load uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
		
	//tâche
	grunt.registerTask('default', ['uglify']);
}
