import React from "react";
export const Reservations = () => {
  const [responses, setResponses] = React.useState({});

  const onInputChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
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
          <label>First name </label>
          <input name="first" type="text" onChange={onInputChange} />
          <label> Last name </label>
          <input type="text" onChange={onInputChange} />
        </div>

        <div>
          <label>Attending? </label>
          <select onChange={onInputChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label> Number of guests </label>
          <input type="number" onChange={onInputChange} />
        </div>
        <div>
          <span>Attendance Type </span>
          <select onChange={onInputChange}>
            <option>Ceremony and Reception</option>
            <option>Ceremony only</option>
            <option>Reception only</option>
          </select>
        </div>

        <label>Comments (anything you want us to know)</label>
        <textarea
          style={{ width: "250px", height: "100px" }}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};
