import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = props => {
	const stateLocations = (
		<Fragment>
			<option></option>
			<option value='VA'>Virginia</option>
			<option value='IL'>Illinois</option>
			<option value='FL'>Florida</option>
			<option value='CA'>California</option>
			<option value='IN'>Indiana</option>
			<option value='MO'>Missouri</option>
			<option value='TN'>Tennessee</option>
			<option value='NM'>New Mexico</option>
			<option value='UT'>Utah</option>
		</Fragment>
	);

	const cityLocations = (
		<Fragment>
			<option></option>
			<option value='Ashland, VA'>Ashland, VA</option>
			<option value='Chicago, IL'>Chicago, IL</option>
			<option value='Collier County, FL'>Collier County, FL</option>
			<option value='Contra Costa County, CA'>Contra Costa County, CA</option>
			<option value='Indianapolis, IN'>Indianapolis, IN</option>
			<option value='Kansas City, MO'>Kansas City, MO</option>
			<option value='Memphis, TN'>Memphis, TN</option>
			<option value='Santa Fe, NM'>Santa Fe, NM</option>
			<option value='Salt Lake City, UT'>Salt Lake City, UT</option>
		</Fragment>
	);

	// Form data state
	const [formData, setFormData] = useState({
		searchType: '',
		location: '',
		incidentType: '',
		startDate: '',
		endDate: ''
	});

	const { searchType, location, incidentType, startDate, endDate } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		console.log(formData);
		e.preventDefault();
	};

	return (
		<Fragment>
			<form className='search' onSubmit={e => handleSubmit(e)}>
				<h1>
					<i>SEARCH DATABASE</i>
				</h1>
				<p className='spacer'>Search Type</p>
				<div className='form-row'>
					<div className='form-check form-check-inline'>
						&nbsp;&nbsp;
						<input
							className='form-check-input'
							type='radio'
							name='searchType'
							value='state'
							onChange={e => onChange(e)}
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
						>
							<option></option>
							<option value='assault'>Assault</option>
							<option value='battery'>Battery</option>
							<option value='homocide'>Homocide</option>
							<option value='Missing Person'>Missing Person</option>
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
							Start Date
						</label>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span className='input-group-text' id='basic-addon1'>
									<i className='fas fa-calendar-alt'></i>
								</span>
							</div>
							<input
								className='form-control'
								id='startDate'
								name='startDate'
								placeholder='MM/DD/YYY'
								type='text'
								data-toggle='datepicker'
								value={startDate}
								onChange={e => onChange(e)}
							/>
						</div>
					</div>
					<div className='col spacer'>
						<label className='control-label' htmlFor='end-date'>
							End Date
						</label>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span className='input-group-text' id='basic-addon1'>
									<i className='fas fa-calendar-alt'></i>
								</span>
							</div>
							<input
								className='form-control'
								id='endDate'
								name='endDate'
								placeholder='MM/DD/YYY'
								type='text'
								data-toggle='datepicker'
								value={endDate}
								onChange={e => onChange(e)}
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

Search.propTypes = {};

export default Search;
