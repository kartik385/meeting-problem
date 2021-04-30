import moment from "moment";

// function to provide free slot timing
function searchMeetingTime(startTime, endTime, eventdata) {
  let result = [];
  for (let i = 0; i < eventdata.length - 1; i++) {
    if (
      startTime.isAfter(eventdata[i].end) &&
      endTime.isBefore(eventdata[i + 1].start)
    ) {
      result.push(eventdata[i].start);
      result.push(eventdata[i + 1].start);
    }
  }
  return result;
}
export default searchMeetingTime;
