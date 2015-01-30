/*jshint node:true */
module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-git-authors");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-qunit");

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			all: ["*.js", "tests/**/*.js"]
		},
		qunit: {
			all: ["tests/index.html"]
		}
	});

	grunt.registerTask("test", ["jshint", "qunit"]);
	grunt.registerTask("default", ["test"]);

};