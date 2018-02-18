var bgText = document.getElementById('bgText');
var prevDiv = document.getElementById('preview');
var menu = document.getElementById('menu');
var c1 = document.getElementById('choice1');
var c2 = document.getElementById('choice2');
var c3 = document.getElementById('choice3');
var picChooser = document.getElementById('picChooser');

var numUse = 0;

bgText.addEventListener('keyup', function(ev) {
	// console.log(ev.keyCode);
	if (ev.keyCode == 13) {
		// do something to the background
		// console.log(c1.check, c2.check, c3.check);
		if (c1.checked) {
			if (bgText.value == 'owl1') {
				document.body.style.backgroundImage = "url(imgs/1.jpg)";
			} else if (bgText.value == 'owl2') {
				document.body.style.backgroundImage = "url(imgs/2.jpg)";	
			} else if (bgText.value == 'owl3') {
				document.body.style.backgroundImage = "url(imgs/3.jpg)";
			} else {
				document.body.style.backgroundColor = bgText.value;	
			}
			// document.body.style.backgroundColor = bgText.value;
			// document.body.style.backgroundImage = "url("+bgText.value+")";
		} else if (c2.checked) {
			if (bgText.value == 'owl1') {
				prevDiv.style.backgroundImage = "url(imgs/1.jpg)";
			} else if (bgText.value == 'owl2') {
				prevDiv.style.backgroundImage = "url(imgs/2.jpg)";	
			} else if (bgText.value == 'owl3') {
				prevDiv.style.backgroundImage = "url(imgs/3.jpg)";
			} else {
				prevDiv.style.backgroundColor = bgText.value;
			}
			// prevDiv.style.backgroundColor = bgText.value;
			// prevDiv.style.backgroundImage = "url("+bgText.value+")";
		} else if (c3.checked) {
			if (bgText.value == 'owl1') {
				menu.style.backgroundImage = "url(imgs/1.jpg)";
			} else if (bgText.value == 'owl2') {
				menu.style.backgroundImage = "url(imgs/2.jpg)";	
			} else if (bgText.value == 'owl3') {
				menu.style.backgroundImage = "url(imgs/3.jpg)";
			} else {
				menu.style.backgroundColor = bgText.value;
			}
			//menu.style.backgroundColor = bgText.value;
			//menu.style.backgroundImage = "url("+bgText.value+")";
		} else {
			alert('Chose an option');
		}
		// prevDiv.style.backgroundColor = bgText.value;
		bgText.value = '';
		
		numUse++;
		// console.log(numUse);
		if (numUse > 5) {
			//alert('You reached the limit. Please pay to use more!')
			document.body.innerHTML = 'You\'ve reached the limit. Please pay to use more!';
		}
	}
	
});

picChooser.addEventListener('change', function() {
	var picNum = parseInt(picChooser.value);
	
	if (picNum > 3) {
		picChooser.value = 1;
	}
	if (picNum < 1) {
		picChooser.value = 3;
	}
	prevDiv.style.backgroundImage = "url(imgs/"+picChooser.value+".jpg)";
});