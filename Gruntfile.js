module.exports = function(grunt){
	grunt.initConfig({


		lv_concat_banner : 'Concatenated Files',
		lv_uglify_banner : 'minified version',
		lv_pkg : grunt.file.readJSON('package.json'),




		jshint: {
			files:{
				src : ['pjs.js', 'pjs2.js', 'Gruntfile.js']
			},
			options:{
				globals:{
					jQuery:true
				}
			}
		},




		concat: {
			options:{
				//banner : '/* <%= lv_concat_banner %> */\n\n',
				separator:'\n\n\n/*next_file*/\n\n\n'	
			},
			files:{
				src : ['pjs.js', 'pjs2.js'],
				dest :'concat_folder/concat.js' 
			}
		},

		
		
		
		babel: {
			options: {
				sourceMap: true,
				presets: ['env']
			},
			files:{
				src: '<%= concat.files.dest%>',
				dest: 'babel/babel_ify.js'
			}
		},
		
		

		uglify: {
			options:{
				banner : '/* <%= lv_uglify_banner %> */'
			},
			files :{
				src: '<%= babel.files.dest%>',
				dest:'build/<%= lv_pkg.name%>.min.js'
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['jshint', 'concat', 'babel', 'uglify']);

};