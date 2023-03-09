import { FormEvent, useState } from 'react';
import { timeChecker } from './backend/timeChecker';

const App = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [timeForAlarm, setTimeForAlarm] = useState(false);
  const [alarmSet, setAlarmSet] = useState(false);

  const handleOnSet = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAlarmSet(true);
    while (!(await timeChecker(alarmTime))) {}

    setTimeForAlarm(true);
  };

  const handleOnClear = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTimeForAlarm(false);
    setAlarmSet(false);
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
          <button className="btn btn-info" onClick={handleOnSet}>
            Set
          </button>

          {alarmSet && (timeForAlarm || <p>Alarm set!</p>)}

          <p>
            {(timeForAlarm && (
              <>
                <img src="/alarm.png" alt="Alarm" />
                <button className="btn btn-success" onClick={handleOnClear}>
                  Clear
                </button>
              </>
            )) ||
              ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
