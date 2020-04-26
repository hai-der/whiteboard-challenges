const mergeRanges = (meetings) => {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  const sortedMeetings = meetingsCopy.sort(
    (a, b) => a['startTime'] - b['startTime']
  );
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    // check to see if they can be merged
    if (lastMergedMeeting.endTime >= currentMeeting.startTime) {
      const endTime = Math.max(
        currentMeeting.endTime,
        lastMergedMeeting.endTime
      );
      lastMergedMeeting.endTime = endTime;
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
};

const meetingTimes = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

console.log(mergeRanges(meetingTimes));
