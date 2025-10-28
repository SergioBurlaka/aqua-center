import { useEffect, useState } from 'react';

import moment from 'moment';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((prevTime) => prevTime + 1000), 1000);

    return () => clearInterval(interval);
  }, []);

  const dateTime1 = moment(time).format('mm:ss');

  return <div>{dateTime1}</div>;
};

export default Timer;
