module.exports = function(str){
	
	var blob = new Blob({[str], type: "text\/javascript"});
	
	var worker = new Worker(window.URL.createObjectURL(blob))
	
	return worker;
	
}