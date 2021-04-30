import "./App.css";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { TextField, Card, CardContent } from "@material-ui/core";
import Status from "./Status";
import Table from "./Table";

function App() {
  // for storing selected date
  const [selectedDate, handleDateChange] = useState(new Date());

  // for storing selected duration
  const [duration, setDuration] = useState(null);

  // for checking all feilds are filled
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="app">
      {/* left part of the page starts from here */}

      <div className="app_left">
        <h1>Find a free Time</h1>
        {/* input form starts here */}

        <form action="#">
          {/* feilds to be filled */}
          <div className="app_inputs">
            {/* using material ui date and time pickers  */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {/* date picker */}
              <KeyboardDatePicker
                required
                clearable
                label="Date"
                inputVariant="outlined"
                value={selectedDate}
                placeholder="2/2/2020"
                onChange={(date) => handleDateChange(date)}
                minDate={new Date()}
                maxDate="2021-05-7"
                format="dd/MM/yyyy"
                className="app_picks"
              />
              {/* time picker */}
              <TimePicker
                required
                label="Time"
                inputVariant="outlined"
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                className="app_picks"
              />
            </MuiPickersUtilsProvider>

            {/* using material ui text feild*/}
            <TextField
              label="Duration (mins)"
              type="number"
              variant="outlined"
              value={duration}
              onChange={(e) => {
                e.target.value > 0
                  ? setDuration(e.target.value)
                  : setDuration("");
              }}
              required
              className="app_picks"
            />
          </div>

          {/* form submit button */}
          <div className="app_btn">
            <button
              onClick={(e) => {
                if (duration) {
                  setIsFilled(true);
                }
              }}
            >
              Find
            </button>
          </div>
        </form>

        {/* input form ends here */}

        {/* Status bar starts from here... */}

        {/* using ternary operator to varify all feilds are filled */}

        {isFilled ? <Status duration={duration} time={selectedDate} /> : ""}
      </div>
      {/* left part of the page ends from here */}

      {/* right part of the page starts here */}

      {/* using material ui card element */}

      <Card className="app_right">
        <CardContent>
          <h1>Events</h1>
          {/* importing table component */}
          <Table />
        </CardContent>
      </Card>
      {/* right part of the page ends here */}
    </div>
  );
}

export default App;
