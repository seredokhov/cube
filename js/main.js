

(function() {
	var cube = document.getElementById('cube');
	var duration = parseFloat(document.defaultView.getComputedStyle(cube, null).transitionDuration) * 1000;
	var deg = 0;
	var maxDeg = (cube.childElementCount * 90) - 90;

	window.addEventListener('wheel', handler, false);


	function handler (e) {

		var deltaY = e.deltaY;
		
		//console.log(document.defaultView.getComputedStyle(cube, null))
		console.log()
		if (deltaY > 0 && deg < maxDeg) {
			console.log(deg);
			console.log(maxDeg);
			distanceIn();
			setTimeout(next, duration);
			setTimeout(distanceOut, duration * 2);
			handlerRefresh()

		}
		if ( deltaY < 0 && deg > 0) {
			distanceIn();
			setTimeout(prev, duration);
			setTimeout(distanceOut, duration * 2);
			handlerRefresh();
		}

		function distanceIn() {
			cube.style.transform = "translateZ(-20vh) rotateX(" + deg + "deg)"
		}
		function distanceOut() {
			cube.style.transform = "translateZ(0vh) rotateX(" + deg + "deg)"
		}

		function next() {
			deg += 90;
			cube.style.transform = "translateZ(-20vh) rotateX(" + deg + "deg)"
		}
		function prev() {
			deg -= 90;
			cube.style.transform = "translateZ(-20vh) rotateX(" + deg + "deg)"
		}

		function handlerRefresh() {
			window.removeEventListener('wheel', handler);
			setTimeout(function(){
				window.addEventListener('wheel', handler, false);
			}, duration * 3);
		}


	}

}())
