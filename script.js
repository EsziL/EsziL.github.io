function LoadSocials() {
	let ball = document.querySelector(".social-discord div");
	let img = document.querySelector(".social-discord img");
	let h = document.querySelector(".social-discord h4");

	ball.addEventListener('mouseover', function() {
		img.style.filter = "grayscale(0)";
	})
	ball.addEventListener('mouseout', function() {
		img.style.filter = "grayscale(1)";
	})
	ball.addEventListener('click', function(){
		let clicks = parseInt(img.className.replace("click", ""));
		++clicks;
		img.classList.add(`${clicks}click`);
		img.classList.remove(`${clicks-1}click`);
		img.style.transform = `rotate(${clicks}turn)`;
		navigator.clipboard.writeText("Balint#2438");

		h.style.opacity = "100";
		setTimeout(opacity, 3000);

		function opacity() {
			if(parseInt(img.className.replace("click", "")) == clicks) {
				h.style.opacity = "0";
			}
		}
	})
}

function SocialLoop() {
	//let scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let container = document.querySelector(".social");

	//console.log(scrollTop);
	if (scrollTop >= 0 && scrollTop <= 52) {
		container.style.top = `${60-scrollTop}px`;
	}

	setTimeout(again, 10)

	function again() {
		SocialLoop();
	}
}

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
	  	top: rect.top + window.scrollY
	};
  }