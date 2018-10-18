var my_try = 0;

function handleClick() {
	my_try += 1; 
	if ((my_try % 7) == 0) {
		document.getElementById("result").innerHTML = '<img src="https://openclipart.org/download/284551/comic-2340467.svg" alt="BOOM!" width="40%"/>';
	}else {
		document.getElementById("result").innerHTML = my_try;
	}
}

document.addEventListener("click", handleClick);
