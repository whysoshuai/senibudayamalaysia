document.addEventListener('contextmenu', event => event.preventDefault());

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
						}, function (error) {
								console.log('FAILED...', error);
						});
		});
}