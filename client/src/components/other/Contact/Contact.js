import React from 'react';

const Contact = () => {
	return (
		<div class='row'>
			<div class='col-md-2'></div>
			<div class='col-md-4 text-left'>
				<h2 class='display-5'>
					<i>CONTACT DETAILS</i>
				</h2>
				<p>
					<i class='fa fa-map-marker fa-lg'></i>&nbsp;&nbsp;Richmond, VA
				</p>
				<p>
					<i class='fa fa-envelope-o '></i>&nbsp;&nbsp;
					<a href='mailto:casebycaseApp@gmail.com'>casebycaseApp@gmail.com</a>
				</p>
			</div>
			<div class='col-md-4'>
				<form>
					<div class='form-group row'>
						<div class='col-md-9'>
							<input
								type='text'
								class='form-control'
								id='username'
								placeholder='Name'
							/>
						</div>
					</div>
					<div class='form-group row'>
						<div class='col-md-9'>
							<input
								type='text'
								class='form-control'
								id='email'
								placeholder='Email Address'
							/>
						</div>
					</div>
					<div class='form-group row'>
						<div class='col-md-9'>
							<textarea
								class='form-control'
								id='message'
								rows='5'
								placeholder='Message'
							></textarea>
						</div>
					</div>
					<button type='submit' class='btn btn-secondary'>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
