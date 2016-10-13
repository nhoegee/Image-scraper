'use strict';

module.exports = function ( grunt ) {
  require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
    compass: {
			dist: {
				options: {
          sourcemap: true,
					sassDir: 'resources/assets/sass',
					cssDir: 'public/css',
          environment: 'development'
				}
			}
		},
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'resources/assets/js/**/*.js',
        dest: 'public/js/app.js'
      }
    },
    connect: {
      server: {
        options: {
          port: '?',
          base: ['public', 'bower_components'],
          open: {
            target: 'http://localhost:8080/Image-scraper/public/index.php'
          }
        }
      }
    },
    watch: {
      css: {
        files: 'resources/assets/sass/main.scss',
        tasks: 'compass'
      },
      js: {
        files: '<%= concat.dist.src %>',
        tasks: 'concat'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [ '<%= watch.css.files %>', '<%= watch.js.files %>' ]
      }
    }
	});

  grunt.registerTask('serve', 'Running the server task.', [ 'compass', 'concat', 'connect:server', 'watch' ]);

	grunt.registerTask('default', 'Running the default task.' );
};
