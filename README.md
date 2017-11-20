//A typical Gruntfile.js format

//Gruntfile.js in the same directory level as package.json

//wrapper function
module.exports = function (grunt) {
	grunt.initialconfig({
		
		 < grunt - options > //like src, dest, filter, nonull
		 
		 
		 < taskname > : {
			 
			options: {
				 < task - level options >
			}
			
			< target > : {
				options: {
					 < target - level options >
				}
			}//<end of <target>
			
		}//end of  <taskname>
		
		
		
	});
}