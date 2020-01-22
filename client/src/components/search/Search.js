import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import './Search.css';

const Search = ({ history }) => {
	const stateLocations = (
		<Fragment>
			<option></option>			
			<option value='CA'>California</option>
			<option value='IL'>Illinois</option>
			<option value='LA'>Louisiana</option>
			<option value='TX'>Texas</option>
		</Fragment>
	);

	const cityLocations = (
		<Fragment>
			<option></option>
			<option value='San Francisco, CA'>San Fransisco, CA</option>
			<option value='Chicago, IL'>Chicago, IL</option>
			<option value='Naperville, IL'>Naperville, IL</option>
			<option value='Urbana, IL'>Urbana, IL</option>
			<option value='Baton Rouge, LA'>Baton Rouge, LA</option>
			<option value='Dallas, TX'>Dallas, TX</option>
		</Fragment>
	);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

	// Form data state
	const [formData, setFormData] = useState({
		searchType: '',
		location: '',
		incidentType: ''
	});

	const { searchType, location, incidentType } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		formData.startDate = startDate;
		formData.endDate = endDate;

		if (searchType === 'state') {
			formData.state = formData.location;
			formData.city = '';
		} else if (searchType === 'city') {
			let locString = formData.location.split(',');
			formData.city = locString[0].trim();
			formData.state = locString[1].trim();
		}
		
		localStorage.setItem('searchRequest', JSON.stringify(formData));
		history.push('/results');
	};

	return (
		<Fragment>
			<form className='search' onSubmit={e => handleSubmit(e)}>
				<h1>
					<i>SEARCH DATABASE</i>
				</h1>
				<p className='lead'>
					<i className='fas fa-search gold-icon'></i> Track down incidents in
					various locations
				</p>
				<p className='h5 spacer'>Search Type</p>
				<div className='form-row'>
					<div className='form-check form-check-inline'>
						&nbsp;&nbsp;
						<input
							className='form-check-input'
							type='radio'
							name='searchType'
							value='state'
							onChange={e => onChange(e)}
							required
						/>
						<label className='form-check-label' htmlFor='inlineRadio1'>
							Statewide
						</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							name='searchType'
							value='city'
							onChange={e => onChange(e)}
							required
						/>
						<label className='form-check-label' htmlFor='inlineRadio2'>
							City-specific
						</label>
					</div>
				</div>
				{/* <!-- 1st Form Row --> */}
				<div className='form-row spacer'>
					<div className='col'>
						<label className='spacer' htmlFor='location'>
							Location
						</label>
						<select
							id='location'
							name='location'
							className='form-control'
							value={location}
							onChange={e => onChange(e)}
							required
						>
							{/* Check search type and display appropriate locations */}
							{searchType === 'state' ? (
								stateLocations
							) : searchType === 'city' ? (
								cityLocations
							) : (
								<Fragment></Fragment>
							)}
						</select>
					</div>
					<div className='col'>
						<label className='spacer' htmlFor='location'>
							Incident Type
						</label>
						<select
							name='incidentType'
							id='incidentType'
							className='form-control'
							value={incidentType}
							onChange={e => onChange(e)}
							required
						>
							<option></option>
							<option value='assault'>Assault</option>
							<option value='battery'>Battery</option>
							<option value='homocide'>Homocide</option>
							<option value='missing person'>Missing Person</option>
							<option value='murder'>Murder</option>
							<option value='rape'>Rape</option>
							<option value='sexual'>Sexual Criminal Acts</option>
							<option value='shot'>Shots</option>
							<option value='unidentified persons'>Unidentified Persons</option>
						</select>
					</div>
				</div>
				{/* <!-- 2nd Form Row --> */}
				<div className='form-row'>
					<div className='col spacer'>
						<label className='control-label' htmlFor='start-date'>
                        <i className="fas fa-calendar-alt green-icon"></i>&nbsp;&nbsp;Start Date
						</label>
						<div className='input-group mb-3'>
							<DatePicker
                                name='startDate'
                                className='form-control'
								selected={startDate}
                                onChange={startDate => setStartDate(startDate)}
							/>
						</div>
					</div>
					<div className='col spacer'>
						<label className='control-label' htmlFor='end-date'>
                        <i className="fas fa-calendar-alt green-icon"></i>&nbsp;&nbsp;End Date
						</label>
						<div className='input-group mb-3'>
							<DatePicker
                                name='startDate'
                                className='form-control'
								selected={endDate}
                                onChange={endDate => setEndDate(endDate)}
							/>
						</div>
					</div>
				</div>
				<button
					type='submit'
					id='subBtn'
					className='btn btn-secondary float-right'
				>
					Submit
				</button>
			</form>
		</Fragment>
	);
};

export default connect(null, { })(withRouter(Search));
