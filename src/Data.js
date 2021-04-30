// Fetching the data of the provided api was not working bcz of CORS problem,so i copied all api data
import moment from "moment";
let data = [
  {
    start: "Fri, 07 May 2021 04:00:15 GMT",
    end: "Fri, 07 May 2021 05:00:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 06:00:15 GMT",
    end: "Fri, 07 May 2021 06:30:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 08:30:15 GMT",
    end: "Fri, 07 May 2021 09:30:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 09:30:15 GMT",
    end: "Fri, 07 May 2021 09:50:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 12:50:15 GMT",
    end: "Fri, 07 May 2021 13:10:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 11:30:15 GMT",
    end: "Fri, 07 May 2021 12:15:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 13:30:15 GMT",
    end: "Fri, 07 May 2021 14:00:15 GMT",
  },
  {
    start: "Fri, 07 May 2021 15:00:15 GMT",
    end: "Fri, 07 May 2021 15:30:15 GMT",
  },
];
// converting given api data to moment objects which is in local time form
let geoData = data.map(({ start, end }) => {
  return {
    start: moment(moment(start).toString()),
    end: moment(moment(end).toString()),
  };
});
export default geoData;
