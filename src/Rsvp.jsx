import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseUrl } from './constants';

// eslint-disable-next-line no-undef
const supabaseKey = process.env.REACT_APP_supaKey;
export const supabase = createClient(supabaseUrl, supabaseKey);

const initialResponse = {
	attendanceType: 'Ceremony and Reception',
	numGuests: 0,
	first: "",
	last: "",
	comments: "",
	email: "",
	attending: "None"
}

export const Reservations = () => {
	const [response, setResponse] = React.useState(initialResponse);
	const [isAttending, setIsAttending] = React.useState(null);
	const [err, setErr] = React.useState(null);
	const navigate = useNavigate();

	const onInputChange = (e) => {
		setResponse({ ...response, [e.target.name]: e.target.value });
	};

	const onAttendanceChange = (e) => {
		setResponse({...response, [e.target.name]: e.target.value, numGuests: 0})
		if (e.target.value === 'Yes') {
			setIsAttending(true);
		} else if (e.target.value === 'None') {
			setIsAttending(null);
		} else {
			setIsAttending(false);
		}
	};

	const disabled = React.useMemo(() => {
		if (isAttending) {
			if (
				!response.first || !response.last || isAttending === null || !response.numGuests || !response.email
			) {
				return true;
			}
			return false;
		} else {
			if (!response.first || !response.last || isAttending === null) {
				return true;
			}
			return false;
		}
	}, [isAttending, response]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!response.first || !response.last|| isAttending === null){
			setErr('Missing required field(s)!')
			return;
		}

		const { data, error } = await supabase.from('Reservations').insert([
			{
				first_name: response.first,
				last_name: response.last,
				number_of_guests: response.numGuests,
				attending: isAttending,
				attendance_type: response.attendanceType,
				comments: response.comments,
				email: response.email,
			},
		]);
		if (!error) {
			console.log(error, data);
			alert('An error occurred, please refresh this page and try again')
		} else {
			setErr(null);
			setResponse(initialResponse);
			navigate('/success');
		}
	};

	return (
		<div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
			<h2>RSVP for our wedding!</h2>
			<p>We would love for you to join us. Please fill out the form below so we know how many guests to expect!</p>
			<form>
				<h3>Your Attendance</h3>
			<div
				className={"rsvp"}
			>
				<div>
					<label>First name* </label>
					<input className={"input"} name="first" type="text" value={response.first} onChange={onInputChange} />
				</div>
				<div>
					<label> Last name* </label>
					<input className={"input"}  name="last" type="text" value={response.last} onChange={onInputChange} />
				</div>

				<div>
					<label>Attending?*
						<select className={"input"}  name="attending" onChange={onAttendanceChange} value={response.attending}>
							<option>None</option>
							<option>Yes</option>
							<option>No</option>
						</select>
					</label>
				</div>
				<div>
				{isAttending && <label> Number of guests* (including self) </label>}
					{isAttending && (
						<input className={"input"}  name="numGuests" type="number" onChange={onInputChange} value={response.numGuests}/>
					)}
				</div>
				{isAttending && (
					<div>
						<span>Attendance Type </span>
						<select className={"input"}  name="attendanceType" onChange={onInputChange} value={response.attendanceType}>
							<option>Ceremony and Reception</option>
							<option>Ceremony only</option>
							<option>Reception only</option>
						</select>
					</div>
				)}
				{isAttending && <div>
					<label>Email* (for event updates)</label>
					<input className={"input"}  name="email" type="email" onChange={onInputChange} value={response.email}/>
				</div>}
				<div>
					<label>
						Comments
						<textarea
							placeholder={"Leave a message here if there's anything else you'd like use to know"}
							name="comments"
							style={{ minWidth: "250px", minHeight: '150px' }}
							onChange={onInputChange}
						/>
					</label>
				</div>
			</div>
			<div style={{ marginLeft: '10px' }}>*required</div>
			<button
				style={{ marginLeft: '10px' }}
				type="submit"
				onClick={handleSubmit}
				disabled={disabled}
			>
        Submit
			</button>
			{err}
		</form>
		
		
		</div>

	);
};
