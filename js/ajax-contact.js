$(function () {
 
	// Get the form.
	var form = $('#active-contact-form');

	// Get the messages div.
	var formMessages = $('.thank-you-message');

	// Set up an event listener for the contact form.
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function (response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			// $('#contact-form input,#contact-form textarea').val('');
			$('.thank-you-message').val(response);
			$("input[name=name]").val('');
			$("input[name=email]").val('');
			$("input[name=phone]").val('');
			$("input[name=subject]").val('');
			$("textarea[name=message]").val('');
		})
		.fail(function (data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});