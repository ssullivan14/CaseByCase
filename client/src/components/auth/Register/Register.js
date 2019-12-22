import React, { Fragment, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    
	const { name, email, password, passwordConfirm } = formData;
	
	const OnChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			console.log('Passwords do not match');
		} else {
			console.log(formData);
		}
	};

    return (
		<Fragment>
			<h1>
				<i>SIGN UP</i>
			</h1>
			<p className='lead'>
				<i className='fas fa-user-secret userIcon'></i> Create Your Account
			</p>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Name'
                        name='name'
						value={name}
						onChange={e => OnChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						className='form-control'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={e => OnChange(e)}
						required
					/>
					<small className='form-text'>
						This site uses <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Gravatar</a> to manage profile photos. If you'd like one, please use a
						Gravatar email.
					</small>
				</div>
				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Password'
						name='password'
						minLength='6'
						value={password}
						onChange={e => OnChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Confirm Password'
						name='passwordConfirm'
						minLength='6'
						value={passwordConfirm}
						onChange={e => OnChange(e)}
						required
					/>
				</div>
				<input type='submit' className='btn btn-secondary' value='Register' />
			</form>
            <br/>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>.
			</p>
		</Fragment>
	);
};

export default Register;
