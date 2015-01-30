/*jshint node:true */
module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-git-authors");
	grunt.loadNpmTasks("grunt-bowercopy");
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
		},
		bowercopy: {
			all: {
				options: {
					clean: true,
					ignore: [ "jquery" ],
					destPrefix: "external"
				},
				files: {
					"qunit/qunit.js": "qunit/qunit/qunit.js",
					"qunit/qunit.css": "qunit/qunit/qunit.css",
					"qunit/LICENSE.txt": "qunit/LICENSE.txt",
					"jshint/jshint.js": "jshint/dist/jshint.js",
					"jshint/LICENSE": "jshint/LICENSE",
					"jquery/jquery.js": "jquery/dist/jquery.js",
					"jquery/MIT-LICENSE.txt": "jquery/MIT-LICENSE.txt"
				}
			}
		}
	});

	grunt.registerTask("test", ["jshint", "qunit"]);
	grunt.registerTask("default", ["test"]);

};