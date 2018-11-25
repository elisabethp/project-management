//	$.getJSON("projects.json", function(json){
//		console.log(json loaded);
//		var data = [];
//		var point_project=0;
//		var loaded_project=1;
//		$.each(data, function(index,value)
//		{
//			if(index=="id")
//				
//		}
//	});
//
//file loading stuff, move to header later
	 function loadFile() {
		var input, file, fr;

		if (typeof window.FileReader !== 'function') {
		  alert("The file API isn't supported on this browser.");
		  return;
		}

		input = document.getElementById('fileinput');
		if (!input) {
		  alert("No fileinput element.");
		}
		else if (!input.files) {
		  alert("This browser doesn't support the `files` property of file inputs.");
		}
		else if (!input.files[0]) {
		  alert("Please select a file before clicking 'Load'");
		}
		else {
		  file = input.files[0];
		  fr = new FileReader();
		  fr.onload = receivedText;
		  fr.readAsText(file);
		}

		function receivedText(e) {
		  let lines = e.target.result;
		  var newArr = JSON.parse(lines); 
		}
	  }


