(function () {
		// https://dashboard.emailjs.com/admin/account
		emailjs.init('5ty_urpEcIa3TnyjO');
})();

window.onload = function () {
		document.getElementById('email-form').addEventListener('submit', function (event) {
				event.preventDefault();
				// generate a five digit number for the contact_number variable
				this.contact_number.value = Math.random() * 100000 | 0;
				// these IDs from the previous steps
				emailjs.sendForm('service_r24gb87', 'template_itl7fqb', this)
						.then(function () {
								console.log('SUCCESS!');
							document.getElementById("success-message").classList.remove("hidden");
						}, function (error) {
								console.log('FAILED...', error);
						});
		});
}

//back to top

let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function myFunction() {
	alert("Thanks for your feedback!");
}

var audio = document.getElementById("bgmusic");
audio.volume = 0.1;

//cool animation
AOS.init({
	duration: 3000,
	once: true,
});