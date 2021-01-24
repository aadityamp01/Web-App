function formSubmitted(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let name = document.getElementById('name').value;

	if (!name || !email || !password) {
		alert("Form can't be submitted empty");
	}

	else {
		alert('Form Submitted Successfully !');
	}
	 
}