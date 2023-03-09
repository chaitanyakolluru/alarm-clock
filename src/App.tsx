import { FormEvent, useState } from 'react';
import { timeChecker } from './backend/timeChecker';

const App = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [timeForAlarm, setTimeForAlarm] = useState(false);

  const handleOnSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    while (!(await timeChecker(alarmTime))) {}

    setTimeForAlarm(true);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Alarm Clock!</h2>
        <h4>Set alarm time</h4>
        <div className="card-actions justify-end">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            onChange={(e) => {
              setAlarmTime(e.target.value);
            }}
            value={alarmTime}
          />
          <button className="btn btn-primary" onClick={handleOnSubmit}>
            Set
          </button>
          <p>
            {(timeForAlarm && <img src="public/alarm.png" alt="Alarm" />) || ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
