import React from 'react';
import { useEffect, useState } from 'react';

function TimeAgo({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const timestampDate = new Date(timestamp * 1000); // Convert to milliseconds

    const timeDifference = currentDate - timestampDate;

    if (timeDifference >= 365 * 24 * 60 * 60 * 1000) {
      const yearsAgo = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
      setTimeAgo(`${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`);
    } else if (timeDifference >= 30 * 24 * 60 * 60 * 1000) {
      const monthsAgo = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
      setTimeAgo(`${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`);
    } else if (timeDifference >= 7 * 24 * 60 * 60 * 1000) {
      const weeksAgo = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
      setTimeAgo(`${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago`);
    } else if (timeDifference >= 24 * 60 * 60 * 1000) {
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      setTimeAgo(`${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`);
    } else if (timeDifference >= 60 * 60 * 1000) {
      const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
      setTimeAgo(`${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`);
    } else if (timeDifference >= 60 * 1000) {
      const minutesAgo = Math.floor(timeDifference / (60 * 1000));
      setTimeAgo(`${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`);
    } else {
      setTimeAgo('Just now');
    }
  }, [timestamp]);

  return <span>{timeAgo}</span>;
}

export default TimeAgo;
