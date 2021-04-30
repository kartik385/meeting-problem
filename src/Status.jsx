import React from "react";
import moment from "moment";
import manageData from "./Utils";

import eventData from "./Data";
import "./Status.css";

function Status({ duration, time }) {
  // setting start and end time using user provided data or props

  let startTime = moment(time);
  let endTime = moment(time).add(duration, "m");

  //calling a function which will give time slots (returns array)

  let result = manageData(startTime, endTime, eventData);

  return (
    <div className="status">
      {/* using ternary operator to find out there is result or not */}
      {result.length > 0 ? (
        <div className="status_success">
          <div className="status_show">
            {/* showing results */}

            <div className="status_past">{`${result[0].format("LT")}`}</div>
            <div className="status_present">{`${startTime.format("LT")}`}</div>
            <div className="status_next">{`${result[1].format("LT")}`}</div>
          </div>
          {/* showing legend */}

          <div className="status_legend">
            <div className="status_free"></div>Free
            <div className="status_busy"></div>Busy
          </div>
        </div>
      ) : (
        <div className="status_error">No slots found!</div>
      )}
    </div>
  );
}

export default Status;
