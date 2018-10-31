$( document ).ready(function() {
	// lastPic variable defined in pages template 
	var picArray = (function(){
		var arr = [];
		for(var i=1,len=lastPic+1;i<len;i++){
			arr.push(i);
		}
		return arr;
	})();
	// gallery variable defined in pages template
	var imgPath = "images/"+gallery+"/";
	
	if (window.location.hash){
		hashValue = window.location.toString().split('#')[1];
		$( ".imgouter" ).html('<img src="' + imgPath + hashValue + '.jpg"/>');
		$( ".imgNum" ).html('#' + hashValue);
		var i = parseInt(hashValue) - 1;
	}else{
		$( ".imgouter" ).html('<img src="' + imgPath + picArray[0] + '.jpg"/>');
		$( ".imgNum" ).html('#' + picArray[0]);
		var i = 0;
	}
	
	$( ".left" ).click(function() {
		if(i == 0){
			$( ".imgouter" ).html('<img src="' + imgPath + picArray[picArray.length - 1] + '.jpg"/>');
			window.location = "#" + picArray[picArray.length - 1];
			$( ".imgNum" ).html('#' + picArray[picArray.length - 1]);
			i = picArray.length - 1;
		}else{
			$( ".imgouter" ).html('<img src="' + imgPath + picArray[i - 1] +'.jpg"/>');
			window.location = "#" + picArray[i - 1];
			$( ".imgNum" ).html('#' + picArray[i - 1]);
			i = i - 1;
		}
	});
	$( ".right" ).click(function() {
		if(i == picArray.length - 1){
			$( ".imgouter" ).html('<img src="' + imgPath + picArray[0] + '.jpg"/>');
			window.location = "#" + picArray[0];
			$( ".imgNum" ).html('#' + picArray[0]);
			i = 0;
		}else{
			$( ".imgouter" ).html('<img src="' + imgPath + picArray[i + 1] + '.jpg"/>');
			window.location = "#" + picArray[i + 1];
			$( ".imgNum" ).html('#' + picArray[i + 1]);
			i = i + 1;
		}
	});
});