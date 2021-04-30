import React from "react";
import data from "./Data";
import "./table.css";
function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {/* iterating through the data to fill every rows */}

          {data.map(({ start, end }) => {
            return (
              <tr>
                {/* formatting given moment object to readable string */}

                <td>{start.format("DD/MM")}</td>
                <td>{start.format("LT")}</td>
                <td>{end.format("LT")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
