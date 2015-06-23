$(document).on('ready', function() {
	
	$('#submit-btn').on('click', login);

	function login(e) {
		e.preventDefault();

		var email = $('#email').val();
		var password = $('#password').val();

		if(email === "aaron@theironyard.com" && password === "password123"){ 
			window.location.replace("http://www.theironyard.com");
		}
		if(email === "admin@google.com" && password === "pandas"){ 
			window.location.replace("http://www.theironyard.com");
		}
		if(email === "alexa.schreffler@gmail.com" && password === "honeycrisp"){ 
			window.location.replace("http://www.theironyard.com");
		}
		if(email.indexOf('@') === -1){
			$('#email-error').html("Please enter your email address.<br/>");
		}
		if(password === ""){
			$('#password-error').html("Please enter your password.<br/>");
		}
		if(email !== "aaron@theironyard.com"){
			$('#email-error').html("User does not exist.<br/>");
		}
		else if (email !== "admin@google.com") {
			$('#email-error').html('User does not exist.</br>');
		}
		else if (email !== "alexa.schreffler@gmail.com") {
			$('#email-error').html('User does not exist.</br>');
		}
		if(email === "aaron@theironyard.com" && password !== "password123"){
			$('#password-error').html("Email does not match password.");
		}
		if(email === "admin@google.com" && password !== "pandas"){
			$('#password-error').html("Email does not match password.");
		}
		if(email === "alexa.schreffler@gmailc.om" && password !== "honeycrisp"){
			$('#password-error').html("Email does not match password.");
		}
	}
});