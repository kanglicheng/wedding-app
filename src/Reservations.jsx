import { createClient } from "@supabase/supabase-js";
import React from "react";
import { supabaseUrl } from "./constants";

const supabaseKey = process.env.REACT_APP_supaKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Reservations = () => {
  const [response, setResponse] = React.useState({
    attendanceType: "Ceremony and Reception",
  });
  const [isAttending, setIsAttending] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  const onInputChange = (e) => {
    setResponse({ ...response, [e.target.name]: e.target.value });
  };

  const onAttendanceChange = (e) => {
    setResponse({ ...response, numGuests: null });
    if (e.target.value === "Yes") {
      setIsAttending(true);
    } else if (e.target.value === "None") {
      setIsAttending(null);
    } else {
      setIsAttending(false);
    }
  };

  const disabled = React.useMemo(() => {
    if (isAttending) {
      if (
        !response.first ||
        !response.last ||
        isAttending === null ||
        !response.numGuests
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
    const { data, error } = await supabase.from("Reservations").insert([
      {
        first_name: response.first,
        last_name: response.last,
        number_of_guests: response.numGuests,
        attending: isAttending,
        attendance_type: response.attendanceType,
        comments: response.comments,
      },
    ]);
    console.log(data);
    if (error) {
      console.log(error);
    } else {
      setSuccess(true);
    }
  };

  return (
    <form>
      <div
        style={{
          margin: "15px",
          rowGap: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <h3>RSVP for our wedding!</h3>
        <div>
          <label>First name* </label>
          <input name="first" type="text" onChange={onInputChange} />
          <label> Last name* </label>
          <input name="last" type="text" onChange={onInputChange} />
        </div>

        <div>
          <label>Attending?* </label>
          <select name="attending" onChange={onAttendanceChange}>
            <option>None</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          {isAttending && <label> Number of guests* </label>}
          {isAttending && (
            <input name="numGuests" type="number" onChange={onInputChange} />
          )}
        </div>
        {isAttending && (
          <div>
            <span>Attendance Type </span>
            <select name="attendanceType" onChange={onInputChange}>
              <option>Ceremony and Reception</option>
              <option>Ceremony only</option>
              <option>Reception only</option>
            </select>
          </div>
        )}

        <label>Comments (anything you want us to know)</label>
        <textarea
          name="comments"
          style={{ width: "250px", height: "100px" }}
          onChange={onInputChange}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>* field is required</div>
      <button
        style={{ marginLeft: "10px" }}
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
      >
        Submit
      </button>
      {success && " RSVP successful!"}
    </form>
  );
};
